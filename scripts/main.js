        
class circle{
  
    constructor(width, height, borderRadius, backgroundColor,translate,transition){
        this.container = document.createElement('div');
        this.container.style.backgroundColor = backgroundColor;
        this.container.style.width =  width;
        this.container.style.height =  height;
        this.container.style.borderRadius  = borderRadius;
        this.container.style.position = 'absolute';
        this.container.style.left = "47%";
        this.container.style.top = "45%";
        this.container.style.opacity = "0"

    
    }

    display()
  {
    document.querySelector("body").appendChild(this.container)

    window.addEventListener('load',()=>{

        ch1.container.style.transform = "translateX(16vw)"
        ch2.container.style.transform = "translateX(-16vw)"
        ch3.container.style.transform = "translateY(30vh)"
        ch4.container.style.transform = "translateY(-33vh)"
        ch5.container.style.transform = "translate(-11vw, 20vh)"
        ch6.container.style.transform = "translate( 11vw,-25vh)"
        ch7.container.style.transform = "translate(11vw,20vh)"
        ch8.container.style.transform = "translate(-12vw,-25vh)"
        this.container.style.opacity = "1"
        ch8.container.style.transition = " 0.5s"
        ch4.container.style.transition = " 0.5s 0.2s"
        ch6.container.style.transition = " 0.5s 0.4s"
        ch1.container.style.transition = " 0.5s 0.6s"
        ch7.container.style.transition = " 0.5s 0.8s"
        ch3.container.style.transition = " 0.5s 1s"
        ch5.container.style.transition = " 0.5s 1.2s"
        ch2.container.style.transition = " 0.5s 1.4s"
    })


  }
    

}


  const ch1 = new circle("100px", "100px","100%","red",)
  const ch2 = new circle("100px", "100px","100%","blue",)
  const ch3= new circle("100px", "100px","100%","green",)
  const ch4 = new circle("100px", "100px","100%","yellow",)

  const ch5= new circle("100px", "100px","100%" ,"pink",)
  const ch6 = new circle("100px", "100px","100%" ,"black",)
  const ch7= new circle("100px", "100px","100%" ,"white",)
  const ch8 = new circle("100px", "100px","100%" ,"brown",)

  
  ch1.display()
  ch2.display()  
  ch3.display()
  ch4.display()
  ch5.display()
  ch6.display()
  ch7.display()
  ch8.display()


