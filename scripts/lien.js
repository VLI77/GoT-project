









canvas.addEventListener('mousemove',()=>{

    let allie  = {
        color : 'green',
    }

    let ennemie  = {
        color : 'red',
    }


if(event.pageX > ch.x && event.pageX < ch.x+40 && 
    event.pageY > ch.y && event.pageY < ch.y+40)
    {   
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(ellipse, ch.x-10, ch.y-10,60,60);
        draw()
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.globalCompositeOperation='destination-over';
        ctx.save();
        ctx.moveTo(ch.x+20,ch.y+40);
        ctx.lineTo(ch30.x, ch30.y);
        ctx.strokeStyle = allie.color
        ctx.stroke();



        ctx.beginPath();
        ctx.globalCompositeOperation='destination-over';
        ctx.save();
        ctx.moveTo(ch.x+20,ch.y+40);
        ctx.lineTo(ch38.x, ch38.y);
        ctx.strokeStyle = ennemie.color
        ctx.stroke();

     }

     else 
     {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         draw()
     }



  

     if(event.pageX > ch2.x && event.pageX < ch2.x+40 && 
        event.pageY > ch2.y && event.pageY < ch2.y+40)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(ellipse2, ch2.x-10, ch2.y-10,60,60);
            draw()
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.globalCompositeOperation='destination-over';
            ctx.save();
            ctx.moveTo(ch2.x+20,ch2.y+40);
            ctx.lineTo(ch28.x, ch28.y);
            ctx.strokeStyle = allie.color
            ctx.stroke();

            ctx.beginPath();
            ctx.lineTo(ch31.x, ch31.y);
            ctx.moveTo(ch2.x+20,ch2.y+40);
            ctx.lineTo(ch18.x, ch18.y);
            ctx.strokeStyle = allie.color
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(ch2.x+20,ch2.y+40);
            ctx.lineTo(ch44.x+10, ch44.y-10);
            ctx.strokeStyle = ennemie.color
            ctx.stroke();
        
         }
         

         
     if(event.pageX > ch3.x && event.pageX < ch3.x+40 && 
        event.pageY > ch3.y && event.pageY < ch3.y+40)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(ellipse3, ch3.x-10, ch3.y-10,60,60);
            draw()
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.globalCompositeOperation='destination-over';
            ctx.save();
            ctx.moveTo(ch3.x+20,ch3.y+40);
            ctx.lineTo(ch31.x, ch31.y);
            ctx.strokeStyle = ennemie.color
            ctx.stroke();

            ctx.beginPath();
            ctx.globalCompositeOperation='destination-over';
            ctx.save();
            ctx.moveTo(ch3.x+20,ch3.y+40);
            ctx.lineTo(ch12.x+30, ch12.y+30);
            ctx.strokeStyle = allie.color
            ctx.stroke();
        
         }
         

         
})


