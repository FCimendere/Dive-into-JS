class ColorMaker {
    constructor(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb() {
        const {r,g,b} = this;
        // return `rgb(${r},${g},${b})`;
        return [r,g,b]
    }

    hex() {
        let rr = this.r.toString(16);
        let gg= this.g.toString(16) ;
        let bb = this.b.toString(16);
        rr = rr.length < 2 ? "0"+rr : rr;
        gg = gg.length < 2 ? "0"+gg : gg;
        bb = bb.length < 2 ? "0"+bb : bb;
        return `#${rr}${gg}${bb}`;
    }
    
    hsl() {
        const myArray = [{
            id:"r",
            calc: (this.r/255).toFixed(2)
        },{
            id:"g",
            calc: (this.g/255).toFixed(2)
        },{
            id:"b",
            calc: (this.b/255).toFixed(2)
        }];

        const min = Math.min(...myArray.map(item => item.calc));
        const max = Math.max(...myArray.map(item => item.calc));
        

        //  Luminace value calculation
        const lum = Math.round(((min+max)/2) * 100);

 

        //  saturation value calculation
        let sat = 0 ;
        if(lum <= 0.5){
            sat = ((max-min)/(max+min)).toFixed(2);
        } else if (lum > 0.5){
            sat = ((max-min)/(2.0-max-min)).toFixed(2);
        } else {
            sat = 0;
        }
        sat = Math.round(sat * 100); // %
        // const returnedSat = `${sat*100}%`;
 

        // hue value calculation
        let H = null;
        for (let item of myArray){
            
            if (max == item.calc){
                if(item.id == "b"){
                    H = (this.r/255) - (this.g/255) / (max-min) + 4;
                    // H = (4 + ((this.r/255)-(this.g/255))/(max-min)) ;
                } else if(item.id == "r"){
                    H = ((this.g/255 - this.b/255) / (max-min)) % 6;
                    // H =((this.g/255)-(this.b/255))/(max-min);
                }else if(item.id == "g"){
                    H = ((this.b/255) - (this.r/255)) / (max-min) + 2;
                    // H = (2 + ((this.b/255)-(this.r/255))/(max-min));
                }
            }
            // if (H < 0){
            //     H += 360;
            // }

        }
        let hue = Math.round(H * 60); 
        if (hue < 0){
            hue +=360;// °
        }
        // const hue = Math.round((H.toFixed(2))*60);
        return [hue, sat, lum];
        // return `hsl(${hue}, ${returnedSat},${returnedLum})`;
    }

    complementary() {
        let RR = this.r - 255; 
        let GG = this.g - 255; 
        let BB = this.b - 255; 
        RR < 0 ? RR *= -1 : RR;
        GG < 0 ? GG *= -1 : GG;
        BB < 0 ? BB *= -1 : BB;
        
        return [RR,GG,BB];
    }
}

function randomise() {
    const randNum = Math.floor(Math.random() * 255);
    return randNum;
}

const btn = document.querySelector("#randomBtn2");

btn.addEventListener('click', ()=>{
    const c1 = new ColorMaker(randomise(),randomise(),randomise());

    const mainBox = document.getElementById("color1")
    const RGB = `rgb(${c1.rgb()[0]},${c1.rgb()[1]},${c1.rgb()[2]})`;
    mainBox.style.backgroundColor = RGB;

    const mainBoxRgb = document.getElementById('rgbCode1');
    mainBoxRgb.innerText = RGB;
    
    const mainBoxHex = document.getElementById('hexCode1');
    mainBoxHex.innerText= (c1.hex());

    const mainBoxHsl = document.getElementById('hslCode1');
    const test = c1.hsl();
    const hsl = `hsl(${test[0]}, ${test[1]}%,${test[2]}%)`;
    console.log(hsl);
    mainBoxHsl.innerText = hsl;

    const cOpposite = new ColorMaker(c1.rgb()[0],c1.rgb()[1],c1.rgb()[2]);
    const opposite = cOpposite.complementary();
    const color2 = document.getElementById('color2');
    const colorOpp =  `rgb(${opposite[0]},${opposite[1]},${opposite[2]})`;
    color2.style.backgroundColor = colorOpp;
    color2.style.color = RGB;
    mainBox.style.color = colorOpp;
    const mainBoxRgb2 = document.getElementById('rgbCode2');
    mainBoxRgb2.innerText = colorOpp;
    // const mainBoxHex2 = document.getElementById('hexCode2');
    // mainBoxHex2.innerText= (cOpposite.hex());
    const mainBoxHsl2 = document.getElementById('hslCode2');
    const test2 = opposite.hsl();
    const hsl2 = `hsl(${test2[0]}, ${test2[1]}%,${test2[2]}%)`;
    console.log(hsl2);
    mainBoxHsl2.innerText = hsl2;


});






