var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){//co-ordinates in x and y
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrblur.style.left = dets.x - 200 + "px";
    crsrblur.style.top = dets.y - 200+ "px";
    // console.log("hey");
})
gsap.to("#nav",{
  backgroundColor:"#000", 
  height:"100px",
  duration:0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})
gsap.to("#main",{
    backgroundColor:"#000", 
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
     crsr.style.scale = 2;
     crsr.style.border = "1px solid white";
     crsr.style.backgroundColor = "transparent";
     })
     elem.addEventListener("mouseleave",function(){
     crsr.style.scale = 1;
     crsr.style.border = "0px solid #95C11E";
     crsr.style.backgroundColor = "#95C11E";
     })
})
gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 55%",
    scrub:2
    
  }

})
gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 6e5%",
    scrub:2
    
  }

})
gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 35%",
    end:"top 25%",
    scrub:4
  }
})
gsap.from("#page4 h1",{
  y:50,
   scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3
  }
})
function goToPage2(){
  document.getElementById("page2").scrollIntoView({
    behavior:"smooth"
  });
}