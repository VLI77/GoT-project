








canvas.addEventListener('mousemove',()=>{

 draw()

    let guerre  = {
        color : 'red',
    }

    let hostile  = {
        color : 'orange',
    }
    
    let alliance  = {
      color : 'yellow',
  }
    let amitie = {
         color : 'green',
      }

      let amour = {
         color : 'blue',
      }

      
      let relation = {
         color : 'purple',
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
        ctx.lineTo(750, 500);

        ctx.lineTo(ch29.x+20, ch29.y+20);
        ctx.strokeStyle = guerre.color
        ctx.stroke();

        ctx.beginPath();
        ctx.globalCompositeOperation='destination-over';
        ctx.save();
        ctx.moveTo(ch.x+20,ch.y+40);
        ctx.lineTo(750, 500);

        ctx.lineTo(ch30.x+20, ch30.y+20);
        ctx.strokeStyle = guerre.color
        ctx.stroke();

        
        ctx.beginPath();
        ctx.globalCompositeOperation='destination-over';
        ctx.save();
        ctx.moveTo(ch.x+20,ch.y+40);
        ctx.lineTo(750, 500);

        ctx.lineTo(ch35.x+20, ch35.y+20);
        ctx.strokeStyle = hostile.color
        ctx.stroke();

        ctx.beginPath();
        ctx.globalCompositeOperation='destination-over';
        ctx.save();
        ctx.moveTo(ch.x+20,ch.y+40);
        ctx.lineTo(750, 500);

        ctx.lineTo(ch53.x+20, ch53.y+20);
        ctx.strokeStyle = amitie.color
        ctx.stroke();

        ctx.beginPath();
        ctx.globalCompositeOperation='destination-over';
        ctx.save();
        ctx.moveTo(ch.x+20,ch.y+40);
        ctx.lineTo(750, 500);

        ctx.lineTo(ch15.x+20, ch15.y+20);
        ctx.strokeStyle = amitie.color
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


         if(event.pageX > ch4.x && event.pageX < ch4.x+40 && 
            event.pageY > ch4.y && event.pageY < ch4.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse4, ch4.x-10, ch4.y-10,60,60);
                draw()
                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch4.x+20,ch4.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch32.x+20, ch32.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch4.x+20,ch4.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch30.x+20, ch30.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch4.x+20,ch4.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();
 
 
 
             }
 
         else if(event.pageX > ch5.x && event.pageX < ch5.x+40 && 
            event.pageY > ch5.y && event.pageY < ch5.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse5, ch5.x-10, ch5.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch5.x+20,ch5.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch8.x+20, ch8.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch5.x+20,ch5.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch5.x+20,ch5.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch56.x+20, ch56.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch5.x+20,ch5.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch48.x+20, ch48.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch5.x+20,ch5.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch47.x+20, ch47.y+20);
                ctx.strokeStyle = amour.color
                ctx.stroke();
 
 
            
             }        
 
         else if(event.pageX > ch6.x && event.pageX < ch6.x+40 && 
            event.pageY > ch6.y && event.pageY < ch6.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse6, ch6.x-10, ch6.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch36.x+20, ch36.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch37.x+20, ch37.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                         
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch27.x+20, ch27.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                                  
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch8.x+20, ch8.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                                               
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch12.x+20, ch12.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch48.x+20, ch48.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch6.x+20,ch6.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch.x+20, ch.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
 
 
            
             }        

             
         else if(event.pageX > ch7.x && event.pageX < ch7.x+40 && 
            event.pageY > ch7.y && event.pageY < ch7.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse7, ch7.x-10, ch7.y-10,60,60);
                draw()
                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch7.x+20,ch7.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch8.x+20, ch8.y+20);
                ctx.strokeStyle = amour.color
                ctx.stroke();
 
             }
 
         else if(event.pageX > ch8.x && event.pageX < ch8.x+40 && 
            event.pageY > ch8.y && event.pageY < ch8.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse8, ch8.x-10, ch8.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch32.x+20, ch32.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch29.x+20, ch29.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch5.x+20, ch5.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                         
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch27.x+20, ch27.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch53.x+20, ch53.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = alliance.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch8.x+20,ch8.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch7.x+20, ch7.y+20);
                ctx.strokeStyle = amour.color
                ctx.stroke();
 
 
 
            
             }
 
         else if(event.pageX > ch9.x && event.pageX < ch9.x+40 && 
            event.pageY > ch9.y && event.pageY < ch9.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse9, ch9.x-10, ch9.y-10,60,60);
                draw()
            
             } 
 
         else if(event.pageX > ch10.x && event.pageX < ch10.x+40 && 
            event.pageY > ch10.y && event.pageY < ch10.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse10, ch10.x-10, ch10.y-10,60,60);
                draw()

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch10.x+20,ch10.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch16.x+20, ch16.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch10.x+20,ch10.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch47.x+20, ch47.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch10.x+20,ch10.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch29.x+20, ch29.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
             }     
 
         else if(event.pageX > ch11.x && event.pageX < ch11.x+40 && 
            event.pageY > ch11.y && event.pageY < ch11.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse11, ch11.x-10, ch11.y-10,60,60);
                draw()
            
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch11.x+20,ch11.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch30.x+20, ch30.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch11.x+20,ch11.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch29.x+20, ch29.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();
             }     
 
         else if(event.pageX > ch12.x && event.pageX < ch12.x+40 && 
            event.pageY > ch12.y && event.pageY < ch12.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse12, ch12.x-10, ch12.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch12.x+20,ch12.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch36.x+20, ch36.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch12.x+20,ch12.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch37.x+20, ch37.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch12.x+20,ch12.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch12.x+20,ch12.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch29.x+20, ch29.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch12.x+20,ch12.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch3.x+20, ch3.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
 
            
             }  
             
          else if(event.pageX > ch13.x && event.pageX < ch13.x+40 && 
            event.pageY > ch13.y && event.pageY < ch13.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse13, ch13.x-10, ch13.y-10,60,60);
                draw()
            
             }
          else if(event.pageX > ch14.x && event.pageX < ch14.x+40 && 
            event.pageY > ch14.y && event.pageY < ch14.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse14, ch14.x-10, ch14.y-10,60,60);
                draw()
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch14.x+20,ch14.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch11.x+20, ch11.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch14.x+20,ch14.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch15.x+20, ch15.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch14.x+20,ch14.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch30.x+20, ch30.y+20);
                ctx.strokeStyle = alliance.color
                ctx.stroke();
             } 


          else if(event.pageX > ch15.x && event.pageX < ch15.x+40 && 
            event.pageY > ch15.y && event.pageY < ch15.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse15, ch15.x-10, ch15.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch15.x+20,ch15.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch15.x+20,ch15.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch12.x+20, ch12.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch15.x+20,ch15.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch29.x+20, ch29.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch15.x+20,ch15.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch30.x+20, ch30.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch15.x+20,ch15.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch32.x+20, ch32.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
            
             } 
          else if(event.pageX > ch16.x && event.pageX < ch16.x+40 && 
            event.pageY > ch16.y && event.pageY < ch16.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse16, ch16.x-10, ch16.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch16.x+20,ch16.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch10.x+20, ch10.y+20);
                ctx.strokeStyle = guerre.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch16.x+20,ch16.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch49.x+20, ch49.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                          
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch16.x+20,ch16.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch57.x+20, ch57.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch16.x+20,ch16.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch32.x+20, ch32.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch16.x+20,ch16.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch47.x+20, ch47.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
 
            
             } 
          else if(event.pageX > ch17.x && event.pageX < ch17.x+40 && 
            event.pageY > ch17.y && event.pageY < ch17.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse17, ch17.x-10, ch17.y-10,60,60);
                draw()

                
            
             } 
          else if(event.pageX > ch18.x && event.pageX < ch18.x+40 && 
            event.pageY > ch18.y && event.pageY < ch18.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse18, ch18.x-10, ch18.y-10,60,60);
                draw()
                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch18.x+20,ch18.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch6.x+20, ch6.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch18.x+20,ch18.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch50.x+20, ch50.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch18.x+20,ch18.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch22.x+20, ch22.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
            
             } 
          else if(event.pageX > ch19.x && event.pageX < ch19.x+40 && 
            event.pageY > ch19.y && event.pageY < ch19.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse19, ch19.x-10, ch19.y-10,60,60);
                draw()

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch19.x+20,ch19.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch50.x+20, ch50.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch19.x+20,ch19.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch20.x+20, ch20.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
            
             } 
          else if(event.pageX > ch20.x && event.pageX < ch20.x+40 && 
            event.pageY > ch20.y && event.pageY < ch20.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse20, ch20.x-10, ch20.y-10,60,60);
                draw()
                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch20.x+20,ch20.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch50.x+20, ch50.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch20.x+20,ch20.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch19.x+20, ch19.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
             } 
          else if(event.pageX > ch21.x && event.pageX < ch21.x+40 && 
            event.pageY > ch21.y && event.pageY < ch21.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse21, ch21.x-10, ch21.y-10,60,60);
                draw()

                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch35.x+20, ch35.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch10.x+20, ch10.y+20);
                ctx.strokeStyle = hostile.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch29.x+20, ch29.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch32.x+20,ch32.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch6.x+20,ch6.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
 
                              
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch21.x+20,ch21.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch30.x+20,ch30.y+20);
                ctx.strokeStyle = alliance.color
                ctx.stroke();
 
 

                
            
             } 
          else if(event.pageX > ch22.x && event.pageX < ch22.x+40 && 
            event.pageY > ch22.y && event.pageY < ch22.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse22, ch22.x-10, ch22.y-10,60,60);
                draw()
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch22.x+20,ch22.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch54.x+20, ch54.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch22.x+20,ch22.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch50.x+20, ch50.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
            
             } 
          else if(event.pageX > ch23.x && event.pageX < ch23.x+40 && 
            event.pageY > ch23.y && event.pageY < ch23.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse23, ch23.x-10, ch23.y-10,60,60);
                draw()

                
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch22.x+20,ch22.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch23.x+10, ch23.y+10);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch22.x+20,ch22.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch54.x+10, ch54.y+10);
                ctx.strokeStyle = amitie.color
                ctx.stroke();

                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch22.x+20,ch22.y+40);
                ctx.lineTo(750, 500);
                ctx.lineTo(ch50.x+10, ch50.y+10);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
            
            
             } 

          else if(event.pageX > ch24.x && event.pageX < ch24.x+40 && 
            event.pageY > ch24.y && event.pageY < ch24.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse24, ch24.x-10, ch24.y-10,60,60);
                draw()
                ctx.beginPath();
                ctx.globalCompositeOperation='destination-over';
                ctx.save();
                ctx.moveTo(ch24.x+20,ch24.y+40);
                ctx.lineTo(750, 500);

                ctx.lineTo(ch50.x+20, ch50.y+20);
                ctx.strokeStyle = amitie.color
                ctx.stroke();
            
             } 



          else if(event.pageX > ch25.x && event.pageX < ch25.x+40 && 
            event.pageY > ch25.y && event.pageY < ch25.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse25, ch25.x-10, ch25.y-10,60,60);
                draw()
            
             } 
          else if(event.pageX > ch26.x && event.pageX < ch26.x+40 && 
            event.pageY > ch26.y && event.pageY < ch26.y+40)
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(ellipse26, ch26.x-10, ch26.y-10,60,60);
                draw()
            
             } 

             else if(event.pageX > ch27.x && event.pageX < ch27.x+40 && 
                event.pageY > ch27.y && event.pageY < ch27.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse27, ch27.x-10, ch27.y-10,60,60);
                    draw()

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch27.x+20,ch27.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch6.x+20, ch6.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch27.x+20,ch27.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch27.x+20,ch27.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch29.x+20, ch29.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch27.x+20,ch27.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch48.x+20, ch48.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();
                    
                
                 }
 
             else if(event.pageX > ch28.x && event.pageX < ch28.x+40 && 
                event.pageY > ch28.y && event.pageY < ch28.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse28, ch28.x-10, ch28.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch28.x+20,ch28.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch32.x+20, ch32.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch28.x+20,ch28.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch31.x+20, ch31.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch28.x+20,ch28.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch56.x+20, ch56.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch28.x+20,ch28.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch11.x+20, ch11.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch28.x+20,ch28.y+40);
                    ctx.lineTo(750, 500);
            
                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = alliance.color
                    ctx.stroke();
                    
                    
                    
                
                 } 
 
             else if(event.pageX > ch29.x && event.pageX < ch29.x+40 && 
                event.pageY > ch29.y && event.pageY < ch29.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse29, ch29.x-10, ch29.y-10,60,60);
                    draw()
        
                
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch29.x+20,ch29.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch56.x+20, ch56.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch29.x+20,ch29.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch37.x+20, ch37.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch29.x+20,ch29.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch29.x+20,ch29.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch47.x+20, ch47.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch29.x+20,ch29.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch44.x+20, ch44.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch29.x+20,ch29.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch10.x+20, ch10.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();
                 }   

             else if(event.pageX > ch30.x && event.pageX < ch30.x+40 && 
                event.pageY > ch30.y && event.pageY < ch30.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse30, ch30.x-10, ch30.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch53.x+10, ch53.y+10);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch36.x, ch36.y);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch56.x+10, ch56.y+10);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch57.x+10, ch57.y+10);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch35.x+20, ch35.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch11.x+20, ch11.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch44.x+20, ch44.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();         ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch12.x+20, ch12.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch32.x+20, ch32.y+20);
                    ctx.strokeStyle = alliance.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch6.x+20, ch6.y+20);
                    ctx.strokeStyle = amour.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch30.x+20,ch30.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch31.x+20, ch31.y+20);
                    ctx.strokeStyle = relation.color
                    ctx.stroke();
                
                
                
                 }                                                
 
             else if(event.pageX > ch31.x && event.pageX < ch31.x+40 && 
                event.pageY > ch31.y && event.pageY < ch31.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse31, ch31.x-10, ch31.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch31.x+20,ch31.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch53.x+20, ch53.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();
                
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch31.x+20,ch31.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch56.x+20, ch56.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch31.x+20,ch31.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch31.x+20,ch31.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch47.x+20, ch47.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch31.x+20,ch31.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch35.x+20, ch35.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();
                
                
                 }                 
 
             else if(event.pageX > ch32.x && event.pageX < ch32.x+40 && 
                event.pageY > ch32.y && event.pageY < ch32.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse32, ch32.x-10, ch32.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch56.x+20, ch56.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                              
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch8.x+20, ch8.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                              
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch5.x+20, ch5.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                                            
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch37.x+20, ch37.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch35.x+20, ch35.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch49.x+20, ch49.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch16.x+20, ch16.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch32.x+20,ch32.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch57.x+20, ch57.y+20);
                    ctx.strokeStyle = amour.color
                    ctx.stroke();
                
                 }

             else if(event.pageX > ch33.x && event.pageX < ch33.x+40 && 
                event.pageY > ch33.y && event.pageY < ch33.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse33, ch33.x-10, ch33.y-10,60,60);
                    draw()

                    
                 }
 
             else if(event.pageX > ch34.x && event.pageX < ch34.x+40 && 
                event.pageY > ch34.y && event.pageY < ch34.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse33, ch34.x-10, ch34.y-10,60,60);
                    draw()

                    
                 }   
 
             else if(event.pageX > ch35.x && event.pageX < ch35.x+40 && 
                event.pageY > ch35.y && event.pageY < ch35.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse35, ch35.x-10, ch35.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch53.x+20, ch53.y+10);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch49.x+20, ch49.y+10);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch57.x+20, ch57.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch30.x+20, ch30.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();
                    ctx.beginPath(

                    );
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch11.x+20, ch11.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch50.x+20, ch50.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch35.x+20,ch35.y+40);

                    ctx.lineTo(ch15.x+20, ch15.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();
                 
                 } 
  
             else if(event.pageX > ch36.x && event.pageX < ch36.x+40 && 
                event.pageY > ch36.y && event.pageY < ch36.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse36, ch36.x-10, ch36.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch36.x+20,ch36.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch18.x+20, ch18.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch36.x+20,ch36.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                             
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch36.x+20,ch36.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch29.x+20, ch29.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();
                 } 

             else if(event.pageX > ch37.x && event.pageX < ch37.x+40 && 
                event.pageY > ch37.y && event.pageY < ch37.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse37, ch37.x-10, ch37.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch37.x+20,ch37.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch6.x+20, ch6.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch37.x+20,ch37.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch37.x+20,ch37.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch29.x+20, ch29.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch37.x+20,ch37.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch8.x+20, ch8.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch37.x+20,ch37.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch5.x+20, ch5.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();
                 } 
 
             else if(event.pageX > ch38.x && event.pageX < ch38.x+40 && 
                event.pageY > ch38.y && event.pageY < ch38.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse38, ch38.x-10, ch38.y-10,60,60);
                    draw()

           
     
                 } 
             else if(event.pageX > ch39.x && event.pageX < ch39.x+40 && 
                event.pageY > ch39.y && event.pageY < ch39.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse39, ch39.x-10, ch39.y-10,60,60);
                    draw()
                 }
 
             else if(event.pageX > ch40.x && event.pageX < ch40.x+40 && 
                event.pageY > ch40.y && event.pageY < ch40.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse40, ch40.x-10, ch40.y-10,60,60);
                    draw()
                 } 
 
             else if(event.pageX > ch41.x && event.pageX < ch41.x+40 && 
                event.pageY > ch41.y && event.pageY < ch41.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse41, ch41.x-10, ch41.y-10,60,60);
                    draw()
                 }
 
             else if(event.pageX > ch42.x && event.pageX < ch42.x+40 && 
                event.pageY > ch42.y && event.pageY < ch42.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse42, ch42.x-10, ch42.y-10,60,60);
                    draw()
                 } 
 
             else if(event.pageX > ch43.x && event.pageX < ch43.x+40 && 
                event.pageY > ch43.y && event.pageY < ch43.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse43, ch43.x-10, ch43.y-10,60,60);
                    draw()
                 }  
              else if(event.pageX > ch44.x && event.pageX < ch44.x+40 && 
                event.pageY > ch44.y && event.pageY < ch44.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse44, ch44.x-10, ch44.y-10,60,60);
                    draw()
                 } 
              else if(event.pageX > ch45.x && event.pageX < ch45.x+40 && 
                event.pageY > ch45.y && event.pageY < ch45.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse45, ch45.x-10, ch45.y-10,60,60);
                    draw()
                 } 
              else if(event.pageX > ch46.x && event.pageX < ch46.x+40 && 
                event.pageY > ch46.y && event.pageY < ch46.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse46, ch46.x-10, ch46.y-10,60,60);
                    draw()
                 }  
              else if(event.pageX > ch47.x && event.pageX < ch47.x+40 && 
                event.pageY > ch47.y && event.pageY < ch47.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse47, ch47.x-10, ch47.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch47.x+20,ch47.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch31.x+20, ch31.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch47.x+20,ch47.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch10.x+20, ch10.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch47.x+20,ch47.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch16.x+20, ch16.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch47.x+20,ch47.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch57.x+20, ch57.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch47.x+20,ch47.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch5.x+20, ch5.y+20);
                    ctx.strokeStyle = relation.color
                    ctx.stroke();
                 } 

              else if(event.pageX > ch48.x && event.pageX < ch48.x+40 && 
                event.pageY > ch48.y && event.pageY < ch48.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse48, ch48.x-10, ch48.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch48.x+20,ch48.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch29.x+20, ch29.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch48.x+20,ch48.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch6.x+20, ch6.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch48.x+20,ch48.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch54.x+20, ch54.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch48.x+20,ch48.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch53.x+20, ch53.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();
                 }
             else if(event.pageX > ch49.x && event.pageX < ch49.x+40 && 
                event.pageY > ch49.y && event.pageY < ch49.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse49, ch49.x-10, ch49.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch49.x+20,ch49.y+40);

                    ctx.lineTo(ch31.x-10, ch31.y+10);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch49.x+20,ch49.y+40);

                    ctx.lineTo(ch29.x-10, ch29.y+10);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch49.x+20,ch49.y+40);

                    ctx.lineTo(ch16.x, ch16.y+10);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch49.x+20,ch49.y+40);
                    ctx.lineTo(750, 500);

                    ctx.lineTo(ch50.x, ch50.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();
                 }


             else if(event.pageX > ch50.x && event.pageX < ch50.x+40 && 
                event.pageY > ch50.y && event.pageY < ch50.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse50, ch50.x-10, ch50.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;
                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch32.x+20, ch32.y+20);
                     ctx.strokeStyle = guerre.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch54.x+20, ch54.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch56.x+20, ch56.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch49.x+20, ch49.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch49.x+20, ch49.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch23.x+20, ch23.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();
 
                     
                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch22.x+20, ch22.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch24.x+20, ch24.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch50.x+20,ch50.y+40);
                     ctx.lineTo(750, 500);

                     ctx.lineTo(ch28.x+20, ch28.y+20);
                     ctx.strokeStyle = amitie.color
                     ctx.stroke();
 
 
 
                 }


              else if(event.pageX > ch51.x && event.pageX < ch51.x+40 && 
                event.pageY > ch51.y && event.pageY < ch51.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse51, ch51.x-10, ch51.y-10,60,60);
                    draw()
                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch51.x+20,ch51.y+40);

                    ctx.lineTo(ch27.x-10, ch27.y+10);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch51.x+20,ch51.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch50.x+20, ch50.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();
                    
                 } 



              else if(event.pageX > ch52.x && event.pageX < ch52.x+40 && 
                event.pageY > ch52.y && event.pageY < ch52.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse52, ch52.x-10, ch52.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch52.x+20,ch52.y+40);

                    ctx.lineTo(ch35.x, ch35.y);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch52.x+20,ch52.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch54.x+10, ch54.y+10);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch52.x+20,ch52.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch23.x+10, ch23.y+10);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch52.x+20,ch52.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch6.x+20, ch6.y+20);
                    ctx.strokeStyle = amour.color
                    ctx.stroke();
                 }


              else if(event.pageX > ch53.x && event.pageX < ch53.x+40 && 
                event.pageY > ch53.y && event.pageY < ch53.y+40)
                {
                  ctx.lineWidth = 5;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse53, ch53.x-10, ch53.y-10,60,60);
                    draw()

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);

                    ctx.lineTo(ch28.x-10, ch28.y+10);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);

                    ctx.lineTo(ch30.x-10, ch30.y+10);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch50.x+10, ch50.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch.x+10, ch.y+20);
                    ctx.strokeStyle = alliance.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch5.x+10, ch5.y+20);
                    ctx.strokeStyle = alliance.color
                    ctx.stroke();


                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch6.x+10, ch6.y+20);
                    ctx.strokeStyle = alliance.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch53.x+20,ch53.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch54.x+10, ch54.y+20);
                    ctx.strokeStyle = amour.color
                    ctx.stroke();


                    

                    
                 } 







               else if(event.pageX > ch54.x && event.pageX < ch54.x+40 && 
                event.pageY > ch54.y && event.pageY < ch54.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse54, ch54.x-10, ch54.y-10,60,60);
                    draw()

                     ctx.lineWidth = 5;

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(ch36.x, ch36.y);
                     ctx.strokeStyle = guerre.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(ch31.x+20, ch31.y);
                     ctx.strokeStyle = hostile.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(ch27.x+20, ch27.y);
                     ctx.strokeStyle = hostile.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(ch28.x+20, ch28.y);
                     ctx.strokeStyle = hostile.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(ch6.x+20, ch6.y+25);
                     ctx.strokeStyle = alliance.color
                     ctx.stroke();

                     
                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(ch8.x+20, ch8.y+25);
                     ctx.strokeStyle = alliance.color
                     ctx.stroke();

                     ctx.beginPath();
                     ctx.globalCompositeOperation='destination-over';
                     ctx.save();
                     ctx.moveTo(ch54.x+20,ch54.y+40);
                     ctx.lineTo(750, 500);
                     ctx.lineTo(ch53.x+15, ch53.y+15);

                     ctx.strokeStyle = amour.color
                     ctx.stroke();
                              }



              else if(event.pageX > ch55.x && event.pageX < ch55.x+40 && 
                event.pageY > ch55.y && event.pageY < ch55.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse55, ch55.x-10, ch55.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch55.x+20,ch55.y+40);

                    ctx.lineTo(ch27.x-10, ch27.y+10);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch55.x+20,ch55.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch50.x+20, ch50.y+20);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();
                 }




              else if(event.pageX > ch56.x && event.pageX < ch56.x+40 && 
                event.pageY > ch56.y && event.pageY < ch56.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse56, ch56.x-10, ch56.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch56.x+20,ch56.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch31.x-10, ch31.y+20);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch56.x+20,ch56.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch34.x-10, ch34.y+10);
                    ctx.strokeStyle = guerre.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch56.x+20,ch56.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch8.x+20, ch8.y+30);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch56.x+20,ch56.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch50.x+20, ch50.y+30);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch56.x+20,ch56.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch18.x+10, ch18.y+10);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();


                 }


              else if(event.pageX > ch57.x && event.pageX < ch57.x+40 && 
                event.pageY > ch57.y && event.pageY < ch57.y+40)
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(ellipse57, ch57.x-10, ch57.y-10,60,60);
                    draw()

                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch57.x+20,ch57.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch29.x-10, ch29.y+20);
                    ctx.strokeStyle = hostile.color
                    ctx.stroke();
                                
                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch57.x+20,ch57.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch50.x+20, ch50.y+30);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch57.x+20,ch57.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch18.x+10, ch18.y+10);
                    ctx.strokeStyle = amitie.color
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.globalCompositeOperation='destination-over';
                    ctx.save();
                    ctx.moveTo(ch57.x+20,ch57.y+40);
                    ctx.lineTo(750, 500);
                    ctx.lineTo(ch31.x-10, ch31.y+10);
                    ctx.strokeStyle = amour.color
                    ctx.stroke();

                 }                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                       
})


