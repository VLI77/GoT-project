let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");


const sizes = {
    width: null,
    height: null,
}

const resize = ()=>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    canvas.width = sizes.width
    canvas.height = sizes.height +200
    console.log(sizes);

}
window.addEventListener('resize', resize)
resize()


function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
}


canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})

    let ellipse = document.querySelector(".ellipse");
    let ellipse2 = document.querySelector(".ellipse2");
    let  ellipse3= document.querySelector(".ellipse3");
    let  ellipse4= document.querySelector(".ellipse4");
    let  ellipse5= document.querySelector(".ellipse5");
    let  ellipse6= document.querySelector(".ellipse6");
    let  ellipse7= document.querySelector(".ellipse7");
    let  ellipse8= document.querySelector(".ellipse8");
    let  ellipse9= document.querySelector(".ellipse9");
    let  ellipse10= document.querySelector(".ellipse10");
    let  ellipse11= document.querySelector(".ellipse11");
    let  ellipse12= document.querySelector(".ellipse12");
    let  ellipse13= document.querySelector(".ellipse13");
    let  ellipse14= document.querySelector(".ellipse14");
    let  ellipse15= document.querySelector(".ellipse15");
    let  ellipse16= document.querySelector(".ellipse16");
    let  ellipse17= document.querySelector(".ellipse17");
    let  ellipse18= document.querySelector(".ellipse18");
    let  ellipse19= document.querySelector(".ellipse19");
    let  ellipse20= document.querySelector(".ellipse20");
    let  ellipse21= document.querySelector(".ellipse21");
    let  ellipse22= document.querySelector(".ellipse22");
    let  ellipse23= document.querySelector(".ellipse23");
    let  ellipse24= document.querySelector(".ellipse24");
    let  ellipse25= document.querySelector(".ellipse25");
    let  ellipse26= document.querySelector(".ellipse26");
    let  ellipse27= document.querySelector(".ellipse27");
    let  ellipse28= document.querySelector(".ellipse28");
    let  ellipse29= document.querySelector(".ellipse29");
    let  ellipse30= document.querySelector(".ellipse30");
    let  ellipse31= document.querySelector(".ellipse31");
    let  ellipse32= document.querySelector(".ellipse32");
    let  ellipse33= document.querySelector(".ellipse33");
    let  ellipse34= document.querySelector(".ellipse34");
    let  ellipse35= document.querySelector(".ellipse35");
    let  ellipse36= document.querySelector(".ellipse36");
    let  ellipse37= document.querySelector(".ellipse37");
    let  ellipse38= document.querySelector(".ellipse38");
    let  ellipse39= document.querySelector(".ellipse39");
    let  ellipse40= document.querySelector(".ellipse40");
    let  ellipse41= document.querySelector(".ellipse41");
    let  ellipse42= document.querySelector(".ellipse42");
    let  ellipse43= document.querySelector(".ellipse43");
    let  ellipse44= document.querySelector(".ellipse44");
    let  ellipse45= document.querySelector(".ellipse45");
    let  ellipse46= document.querySelector(".ellipse46");
    let  ellipse47= document.querySelector(".ellipse47");
    let  ellipse48= document.querySelector(".ellipse48");
    let  ellipse49= document.querySelector(".ellipse49");
    let  ellipse50= document.querySelector(".ellipse50");
    let  ellipse51= document.querySelector(".ellipse51");
    let  ellipse52= document.querySelector(".ellipse52");
    let  ellipse53= document.querySelector(".ellipse53");
    let  ellipse54= document.querySelector(".ellipse54");
    let  ellipse55= document.querySelector(".ellipse55");
    let  ellipse56= document.querySelector(".ellipse56");
    let  ellipse57= document.querySelector(".ellipse57");

    let ch = {x: window.innerWidth*0.48, y: window.innerHeight*0.17,}    
    let ch2 = {x: window.innerWidth*0.505, y: window.innerHeight*0.175,}
    let ch3 = {x: window.innerWidth*0.53, y: window.innerHeight*0.190,}
    let ch4 = {x: window.innerWidth*0.558, y: window.innerHeight*0.210,}
    let ch5 = {x: window.innerWidth*0.585, y: window.innerHeight*0.235,}
    let ch6 = {x: window.innerWidth*0.610, y: window.innerHeight*0.265,}
    let ch7 = {x: window.innerWidth*0.632, y: window.innerHeight*0.300,}
    let ch8 = {x: window.innerWidth*0.652, y: window.innerHeight*0.342,}
    let ch9 = {x: window.innerWidth*0.670, y: window.innerHeight*0.394,}
    let ch10 = {x: window.innerWidth*0.685, y: window.innerHeight*0.450,}
    let ch11 = {x: window.innerWidth*0.695, y: window.innerHeight*0.50,}
    let ch12 = {x: window.innerWidth*0.700, y: window.innerHeight*0.55,}
    let ch13 = {x: window.innerWidth*0.705, y: window.innerHeight*0.605,}
    let ch14 = {x: window.innerWidth*0.705, y: window.innerHeight*0.660,}
    let ch15 = {x: window.innerWidth*0.702, y: window.innerHeight*0.715,}
    let ch16 = {x: window.innerWidth*0.698, y: window.innerHeight*0.77,}
    let ch17 = {x: window.innerWidth*0.688, y: window.innerHeight*0.82,}
    let ch18 = {x: window.innerWidth*0.678, y: window.innerHeight*0.87,}
    let ch19 = {x: window.innerWidth*0.663, y: window.innerHeight*0.92,}
    let ch20 = {x: window.innerWidth*0.647, y: window.innerHeight*0.96,}
    let ch21 = {x: window.innerWidth*0.625, y: window.innerHeight*1,}
    let ch22 = {x: window.innerWidth*0.603, y: window.innerHeight*1.03,}
    let ch23 = {x: window.innerWidth*0.582, y: window.innerHeight*1.05,}
    let ch24 = {x: window.innerWidth*0.562, y: window.innerHeight*1.07,}
    let ch25 = {x: window.innerWidth*0.540, y: window.innerHeight*1.08,}
    let ch26 = {x: window.innerWidth*0.520, y: window.innerHeight*1.09,}
    let ch27 = {x: window.innerWidth*0.5, y: window.innerHeight*1.095,}
    let ch28 = {x: window.innerWidth*0.480, y: window.innerHeight*1.096,}
    let ch29 = {x: window.innerWidth*0.460, y: window.innerHeight*1.096,}
    let ch30 = {x: window.innerWidth*0.435, y: window.innerHeight*1.091,}
    let ch31 = {x: window.innerWidth*0.412, y: window.innerHeight*1.085,}
    let ch32 = {x: window.innerWidth*0.39, y: window.innerHeight*1.075,}
    let ch33 = {x: window.innerWidth*0.37, y: window.innerHeight*1.055,}
    let ch34 = {x: window.innerWidth*0.35, y: window.innerHeight*1.035,}
    let ch35 = {x: window.innerWidth*0.33, y: window.innerHeight*1.008,}
    let ch36 = {x: window.innerWidth*0.31, y: window.innerHeight*0.975,}
    let ch37 = {x: window.innerWidth*0.295, y: window.innerHeight*0.94,}
    let ch38 = {x: window.innerWidth*0.28, y: window.innerHeight*0.90,}
    let ch39 = {x: window.innerWidth*0.268, y: window.innerHeight*0.86,}
    let ch40 = {x: window.innerWidth*0.260, y: window.innerHeight*0.82,}
    let ch41 = {x: window.innerWidth*0.254, y: window.innerHeight*0.78,}
    let ch42 = {x: window.innerWidth*0.251, y: window.innerHeight*0.73,}
    let ch43 = {x: window.innerWidth*0.248, y: window.innerHeight*0.68,}
    let ch44 = {x: window.innerWidth*0.246, y: window.innerHeight*0.63,}
    let ch45 = {x: window.innerWidth*0.248, y: window.innerHeight*0.575,}
    let ch46 = {x: window.innerWidth*0.251, y: window.innerHeight*0.525,}
    let ch47 = {x: window.innerWidth*0.256, y: window.innerHeight*0.478,}
    let ch48 = {x: window.innerWidth*0.265, y: window.innerHeight*0.435,}
    let ch49 = {x: window.innerWidth*0.278, y: window.innerHeight*0.390,}
    let ch50 = {x: window.innerWidth*0.295, y: window.innerHeight*0.340,}
    let ch51 = {x: window.innerWidth*0.313, y: window.innerHeight*0.300,}
    let ch52 = {x: window.innerWidth*0.333, y: window.innerHeight*0.265,}
    let ch53 = {x: window.innerWidth*0.355, y: window.innerHeight*0.235,}
    let ch54 = {x: window.innerWidth*0.380, y: window.innerHeight*0.215,}
    let ch55 = {x: window.innerWidth*0.405, y: window.innerHeight*0.195,}
    let ch56 = {x: window.innerWidth*0.430, y: window.innerHeight*0.175,}
    let ch57 = {x: window.innerWidth*0.455, y: window.innerHeight*0.170,}


    let f1 = document.querySelector('.f1')
    let f2 = document.querySelector('.f2')
    let f3 = document.querySelector('.f3')
    let f4 = document.querySelector('.f4')
    let f5 = document.querySelector('.f5')
    let f6 = document.querySelector('.f6')
    let f7 = document.querySelector('.f7')
    let f8 = document.querySelector('.f8')
    let f9 = document.querySelector('.f9')
    let f10 = document.querySelector('.f10')

    
    let f1_xy = { x: window.innerWidth*0.785, y: window.innerHeight*0.4,}
    let f2_xy = { x: window.innerWidth*0.855, y: window.innerHeight*0.4,}
    let f3_xy = { x: window.innerWidth*0.785, y:  window.innerHeight*0.55,}
    let f4_xy = { x: window.innerWidth*0.855, y: window.innerHeight*0.55,}
    let f5_xy = { x: window.innerWidth*0.785, y:window.innerHeight*0.7,}
    let f6_xy = { x: window.innerWidth*0.855, y:window.innerHeight*0.7,}
    let f7_xy = { x: window.innerWidth*0.785 ,y: window.innerHeight*0.85,}
    let f8_xy = { x: window.innerWidth*0.855, y: window.innerHeight*0.85,}
    let f9_xy = { x: window.innerWidth*0.785, y: window.innerHeight*1,}
    let f10_xy = { x: window.innerWidth*0.855, y: window.innerHeight*1,}


let guerre = document.querySelector('.guerre')
let hostile = document.querySelector('.hostile')
let alliance = document.querySelector('.alliance')
let amitie = document.querySelector('.amitie')
let amour = document.querySelector('.amour')
let relation = document.querySelector('.relation')



function draw(){
    ctx.drawImage(ellipse, ch.x, ch.y,40,40);
    ctx.drawImage(ellipse2, ch2.x, ch2.y,40,40);
    ctx.drawImage(ellipse3, ch3.x, ch3.y,40,40);
    ctx.drawImage(ellipse4, ch4.x, ch4.y,40,40);
    ctx.drawImage(ellipse5, ch5.x, ch5.y,40,40);
    ctx.drawImage(ellipse6, ch6.x, ch6.y,40,40);
    ctx.drawImage(ellipse7, ch7.x, ch7.y,40,40);
    ctx.drawImage(ellipse8, ch8.x, ch8.y,40,40);
    ctx.drawImage(ellipse9, ch9.x, ch9.y,40,40);
    ctx.drawImage(ellipse10, ch10.x, ch10.y,40,40);
    ctx.drawImage(ellipse11, ch11.x, ch11.y,40,40);
    ctx.drawImage(ellipse12, ch12.x, ch12.y,40,40);
    ctx.drawImage(ellipse13, ch13.x, ch13.y,40,40);
    ctx.drawImage(ellipse14, ch14.x, ch14.y,40,40);
    ctx.drawImage(ellipse15, ch15.x, ch15.y,40,40);
    ctx.drawImage(ellipse16, ch16.x, ch16.y,40,40);
    ctx.drawImage(ellipse17, ch17.x, ch17.y,40,40);
    ctx.drawImage(ellipse18, ch18.x, ch18.y,40,40);
    ctx.drawImage(ellipse19, ch19.x, ch19.y,40,40);
    ctx.drawImage(ellipse20, ch20.x, ch20.y,40,40);
    ctx.drawImage(ellipse21, ch21.x, ch21.y,40,40);
    ctx.drawImage(ellipse22, ch22.x, ch22.y,40,40);
    ctx.drawImage(ellipse23, ch23.x, ch23.y,40,40);
    ctx.drawImage(ellipse24, ch24.x, ch24.y,40,40);
    ctx.drawImage(ellipse25, ch25.x, ch25.y,40,40);
    ctx.drawImage(ellipse26, ch26.x, ch26.y,40,40);
    ctx.drawImage(ellipse27, ch27.x, ch27.y,40,40);
    ctx.drawImage(ellipse28, ch28.x, ch28.y,40,40);
    ctx.drawImage(ellipse29, ch29.x, ch29.y,40,40);
    ctx.drawImage(ellipse30, ch30.x, ch30.y,40,40);
    ctx.drawImage(ellipse31, ch31.x, ch31.y,40,40);
    ctx.drawImage(ellipse32, ch32.x, ch32.y,40,40);
    ctx.drawImage(ellipse33, ch33.x, ch33.y,40,40);
    ctx.drawImage(ellipse34, ch34.x, ch34.y,40,40);
    ctx.drawImage(ellipse35, ch35.x, ch35.y,40,40);
    ctx.drawImage(ellipse36, ch36.x, ch36.y,40,40);
    ctx.drawImage(ellipse37, ch37.x, ch37.y,40,40);
    ctx.drawImage(ellipse38, ch38.x, ch38.y,40,40);
    ctx.drawImage(ellipse39, ch39.x, ch39.y,40,40);
    ctx.drawImage(ellipse40, ch40.x, ch40.y,40,40);
    ctx.drawImage(ellipse41, ch41.x, ch41.y,40,40);
    ctx.drawImage(ellipse42, ch42.x, ch42.y,40,40);
    ctx.drawImage(ellipse43, ch43.x, ch43.y,40,40);
    ctx.drawImage(ellipse44, ch44.x, ch44.y,40,40);
    ctx.drawImage(ellipse45, ch45.x, ch45.y,40,40);
    ctx.drawImage(ellipse46, ch46.x, ch46.y,40,40);
    ctx.drawImage(ellipse47, ch47.x, ch47.y,40,40);
    ctx.drawImage(ellipse48, ch48.x, ch48.y,40,40);
    ctx.drawImage(ellipse49, ch49.x, ch49.y,40,40);
    ctx.drawImage(ellipse50, ch50.x, ch50.y,40,40);
    ctx.drawImage(ellipse51, ch51.x, ch51.y,40,40);
    ctx.drawImage(ellipse52, ch52.x, ch52.y,40,40);
    ctx.drawImage(ellipse53, ch53.x, ch53.y,40,40);
    ctx.drawImage(ellipse54, ch54.x, ch54.y,40,40);
    ctx.drawImage(ellipse55, ch55.x, ch55.y,40,40);
    ctx.drawImage(ellipse56, ch56.x, ch56.y,40,40);
    ctx.drawImage(ellipse57, ch57.x, ch57.y,40,40);




    ctx.drawImage(f1, f1_xy.x, f1_xy.y,80,90);
    ctx.drawImage(f2, f2_xy.x, f2_xy.y,80,90);
    ctx.drawImage(f3, f3_xy.x, f3_xy.y,80,90);
    ctx.drawImage(f4, f4_xy.x, f4_xy.y,80,90);
    ctx.drawImage(f5, f5_xy.x, f5_xy.y,80,90);
    ctx.drawImage(f6, f6_xy.x, f6_xy.y,80,90);
    ctx.drawImage(f7, f7_xy.x, f7_xy.y,80,90);
    ctx.drawImage(f8, f8_xy.x, f8_xy.y,80,90);
    ctx.drawImage(f9, f9_xy.x, f9_xy.y,80,90);
    ctx.drawImage(f10, f10_xy.x,f10_xy.y,80,90);



    ctx.drawImage(guerre, window.innerWidth*0.032, window.innerHeight*0.27,70,70);
    ctx.drawImage(hostile, window.innerWidth*0.032,  window.innerHeight*0.4,70,70);
    ctx.drawImage(alliance, window.innerWidth*0.032, window.innerHeight*0.53,70,70);
    ctx.drawImage(amitie, window.innerWidth*0.032, window.innerHeight*0.66,70,70);
    ctx.drawImage(amour, window.innerWidth*0.032,window.innerHeight*0.79,70,70);
    ctx.drawImage(relation, window.innerWidth*0.032, window.innerHeight*0.92,70,70);

    ctx.font = "20px Games of Thrones";
    ctx.fillStyle = "white";
    ctx.fillText("GUERRE", window.innerWidth*0.1,  window.innerHeight*0.325, );
    ctx.fillText("HOSTILE",  window.innerWidth*0.1, window.innerHeight*0.455,);
    ctx.fillText("ALLIANCE",  window.innerWidth*0.1, window.innerHeight*0.585,);
    ctx.fillText("AMITIE",  window.innerWidth*0.1, window.innerHeight*0.715,);
    ctx.fillText("AMOUR",  window.innerWidth*0.1, window.innerHeight*0.845,);
    ctx.fillText("RELATION SEXUELLES",  window.innerWidth*0.1,window.innerHeight*0.975,);

}

draw()

