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
    canvas.height = sizes.height
    console.log(sizes);
}


window.addEventListener('resize', resize)
resize()



let stark = document.querySelector(".stark");
let corbeau = document.querySelector(".corbeau");
let cerf = document.querySelector(".cerf");
let lion = document.querySelector(".lion");
let drag = document.querySelector(".drag");




let family = {
    x: 100,
    y: 450,

}


let family2 = {
    x: 100,
    y: 20,
}

let family3 = {
    x: 1200,
    y: 20,
}

let family4 = {
    x: 650,
    y: 250,
}

let family5 = {
    x: 1200,
    y: 450,
}


ctx.drawImage(stark, family.x, family.y);
ctx.drawImage(corbeau, family2.x, family2.y);
ctx.drawImage(cerf,family3.x, family3.y);
ctx.drawImage(lion, family4.x, family4.y);
ctx.drawImage(drag, family5.x, family5.y);

let allie  = {
    color : 'green',
}

let enemie = {
    color : 'red',
}

//stark to middle

ctx.beginPath();
ctx.globalCompositeOperation='destination-over';
ctx.moveTo(family.x+160,family.y+100);
ctx.lineTo(family4.x+120, family4.y+100);
ctx.lineWidth = 10;
ctx.strokeStyle = enemie.color
ctx.stroke();



//cerf to middle

ctx.beginPath();
ctx.globalCompositeOperation='destination-over';
ctx.moveTo(family3.x+100,family3.y+100);
ctx.lineTo(family4.x+100, family4.y+100);
ctx.strokeStyle = allie.color
ctx.stroke();

//corbeau to middle
ctx.beginPath();
ctx.globalCompositeOperation='destination-over';
ctx.moveTo(family2.x+100,family2.y+100);
ctx.lineTo(family4.x+160, family4.y+100);
ctx.strokeStyle = allie.color
ctx.stroke();

ctx.beginPath();
ctx.globalCompositeOperation='destination-over';
ctx.moveTo(family5.x+100,family5.y+100);
ctx.lineTo(family4.x+100, family4.y+100);
ctx.strokeStyle = allie.color
ctx.stroke();





// ctx.beginPath();
// ctx.arc(family.x,family.y, family.radius,0,2*Math.PI);
// ctx.strokeStyle = family.color
// ctx.stroke();


// var img1=new Image();
// img1.onload=start;
// img1.src="https://dl.dropboxusercontent.com/u/139992952/multple/mm.jpg";

// function start(){
//     if(--imgCount>0){return;}
//     pattern1=ctx.createPattern(img1,'repeat');
//     pattern2=ctx.createPattern(img2,'repeat');
//     draw();
//   }


// ctx.beginPath();
// ctx.arc(family2.x,family2.y,family2.radius,0,2*Math.PI);
// ctx.strokeStyle = family2.color
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(family3.x,family3.y,family3.radius,0,2*Math.PI);
// ctx.strokeStyle = family3.color
// ctx.stroke();

