function frontPage(){
    
gsap.from(".intro .left img",{
    x:-100,
    opacity:0,
    duration:1.5,
    ease:"power3",
    delay:1,
})

gsap.from(".intro .right",{
    x:100,
    y:-100,
    opacity:0,
    duration:1.5,
    ease:"power3",
    delay:1,
})

gsap.from(".links",{
    y:50,
    opacity:0,
    duration:1.5,
    delay:2.2,
    ease:"power3",
})

gsap.from(".about li",{
    x:-100,
    opacity:0,
    duration:1.5,
    delay:2.5,
    ease:"power3",
    stagger:.70,
})







}
frontPage()

function cursor(){
    var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        left:dets.x - 10 + "px",
        top:dets.y - 10 + "px,"
    })
})
}
cursor()

