        
class circle{
  
    constructor(width, height, borderRadius, backgroundColor,link){
        this.container = document.createElement('a');
        this.container.href = link
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

        ch1.container.style.transform = "translateX(15vw)"
        ch2.container.style.transform = "translateX(-15vw)"
        ch3.container.style.transform = "translateY(33vh)"
        ch4.container.style.transform = "translateY(-30vh)"
        ch5.container.style.transform = "translate(-11vw, 22vh)"
        ch6.container.style.transform = "translate( 11vw,-22vh)"
        ch7.container.style.transform = "translate(12vw,22vh)"
        ch8.container.style.transform = "translate(-12vw,-20vh)"
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

class emblem{

  constructor(src){
    this.container = document.createElement('img');
    this.container.src = src
    this.container.style.position = 'absolute';
    this.container.style.left = "47%";
    this.container.style.top = "45%";
    this.container.style.opacity = "0"

}

display2(){
  document.querySelector("body").appendChild(this.container)

      window.addEventListener('load',()=>{

        img1.container.style.transform = "translate(-40vw,-40vh)"
        img1.container.style.transition = " 0.5s"
        img2.container.style.transform = "translate(-40vw,-20vh)"
        img2.container.style.transition = " 0.5s 0.4s"
        img3.container.style.transform = "translate(-40vw, 0vh)"
        img3.container.style.transition = " 0.5s 0.8s"
        img4.container.style.transform = "translate(-40vw, 20vh)"
        img4.container.style.transition = " 0.5s 1.2s"
        img5.container.style.transform = "translate(-40vw,40vh)"
        img5.container.style.transition = " 0.5s 1.6s"

        this.container.style.opacity = "1"

        img6.container.style.transform = "translate(40vw,-40vh)"
        img6.container.style.transition = " 0.5s 0.2s"
        img7.container.style.transform = "translate(40vw,-20vh)"
        img7.container.style.transition = " 0.5s 0.6s"
        img8.container.style.transform = "translate(40vw, 0vh)"
        img8.container.style.transition = " 0.5s 1s"
        img9.container.style.transform = "translate(40vw, 20vh)"
        img9.container.style.transition = " 0.5s 1.4s"
        img10.container.style.transform = "translate(40vw,40vh)"
        img10.container.style.transition = " 0.5s 1.8s"
    })
    }
}


  const img1 = new emblem("./images/family_lion.png")
  const img2 = new emblem("./images/family_lion.png")
  const img3 = new emblem("./images/family_lion.png")
  const img4 = new emblem("./images/family_lion.png")
  const img5 = new emblem("./images/family_lion.png")
  const img6 = new emblem("./images/family_lion.png")
  const img7 = new emblem("./images/family_lion.png")
  const img8 = new emblem("./images/family_lion.png")
  const img9 = new emblem("./images/family_lion.png")
  const img10 = new emblem("./images/family_lion.png")


  const ch1 = new circle("100px", "100px","100%","red","index.html")
  const ch2 = new circle("100px", "100px","100%","blue","index.html")
  const ch3= new circle("100px", "100px","100%","green","index.html")
  const ch4 = new circle("100px", "100px","100%","yellow","index.html")

  const ch5= new circle("100px", "100px","100%" ,"pink","index.html")
  const ch6 = new circle("100px", "100px","100%" ,"black","index.html")
  const ch7= new circle("100px", "100px","100%" ,"white","index.html")
  const ch8 = new circle("100px", "100px","100%" ,"brown","index.html")

  
  ch1.display()
  ch2.display()  
  ch3.display()
  ch4.display()
  ch5.display()
  ch6.display()
  ch7.display()
  ch8.display()
  img1.display2()
  img2.display2()
  img3.display2()
  img4.display2()
  img5.display2()
  img6.display2()
  img7.display2()
  img8.display2()
  img9.display2()
  img10.display2()


