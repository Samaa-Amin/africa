$(document).ready(function(){
    var loadText =document.getElementsByClassName("load-text_word")
// var loadTextArr = Array.from(loadText)
    var counter = 0;
    var count = 0;
    var i = setInterval(function(){
      $("#pointer-dot").html('<p>'+count + "%"+'</p>');

      $("#pointer-dot").css({'background-color':'transparent'})
      counter++;
      count++;
      if(counter == 101){
        clearInterval(i);
        $("#pointer-dot").css({'background-color':'#fff'})

      $("#pointer-dot").html('');
      }
    },30);


    
    var firstLoad=[
        'Dewenati','meilleurs',"season's","afeshia","boas"
    ]
    var secLoad=[
        "",'voeux','greatings','pa','festas!'
    ]

    // loading text
    var index=0
    var y = setInterval(function(){
        if(loaded){
            return
        }else{
            if(index/2==0){

                $("#load-text_word").html(firstLoad[index+1]+" "+'<span>'+secLoad[index+1]+'</span>');
            }else{
                $("#load-text_word").html('<span>'+firstLoad[index+1]+'</span>'+" "+secLoad[index+1]);
            }
            if(index == firstLoad.length){
                index=0
              clearInterval(y);
            }else{
                index++
            }
        }
      },600);
    });

// ==========================================preloader


var loaded=false
$( window ).on( "load", function(){
    
    setTimeout(() => {
        
                var loader=document.getElementById("loader")
                loader.classList.add("show")
                document.body.style.overflowY="auto"
                loaded=true

            }, 3000);
} );

// ========================================================================

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {

    // on load animation
    let controller = new ScrollMagic.Controller();
    // _______________________first row
    let timeline2 = new TimelineMax();
    timeline2
    .to('.home-text', 3, {y:-230,ease: Power3.easeInOut},0)
    .to('.t', 0.5, {scale:0.7,opacity:0.5,ease: Power3.easeInOut},'-=3')
    .to('.t', 3, {scale:1,ease: Power3.easeInOut},'-=2.5')
    .to('.text2', 3, {opacity:1,ease: Power3.easeInOut},'-=3')
     .to('.home', 3, {backgroundColor:"#c13e82",ease: Power3.easeInOut},'-=3')
    .to('.bg1', 3, {opacity:"0",ease: Power3.easeInOut},'-=3')
    .to('.bg2', 3, {opacity:"1",ease: Power3.easeInOut},'-=2')
    // .to('.bg2 .blob1', 2, {scale:"1",ease: Power3.easeInOut},'-=2')


    // 
    .to('.home-text', 3, {y:-460,ease: Power3.easeInOut})
    .to('.t', 0.5, {scale:0.7,opacity:0.5,ease: Power3.easeInOut},'-=3')
    .to('.t', 3, {scale:1,ease: Power3.easeInOut},'-=2.5')
    .to('.text3', 3, {opacity:1,ease: Power3.easeInOut},'-=3')
    .to('.home', 3, {backgroundColor:"#e3282f",ease: Power3.easeInOut},'-=3')
    .to('.bg2', 3, {opacity:"0",ease: Power3.easeInOut},'-=3')
    .to('.bg3', 3, {opacity:"1",ease: Power3.easeInOut},'-=2')
    // .to('.bg3 .blob1', 2, {scale:"1",ease: Power3.easeInOut},'-=2')

    // 
    .to('.home-text', 3, {y:-690,ease: Power3.easeInOut})
    .to('.t', 0.5, {scale:0.7,opacity:0.5,ease: Power3.easeInOut},'-=3')
    .to('.t', 3, {scale:1,ease: Power3.easeInOut},'-=2.5')
    .to('.text4', 3, {opacity:1,ease: Power3.easeInOut},'-=3')
    .to('.home', 3, {backgroundColor:"#f69c2a",ease: Power3.easeInOut},'-=3')
    .to('.bg3', 3, {opacity:"0",ease: Power3.easeInOut},'-=3')
    .to('.bg4', 3, {opacity:"1",ease: Power3.easeInOut},'-=2')
    // .to('.bg4 .blob1', 2, {scale:"1",ease: Power3.easeInOut},'-=2')




    let scene1 = new ScrollMagic.Scene({
        triggerElement: '.main',
        duration: '300%',
        triggerHook: 0,
    })
        .setTween(timeline2)
        .setPin('.main')
        .addTo(controller);
})

// ================================

// =========================mouse move
var timeout;
$('#container-h').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
  
});

function callParallax(e){
  parallaxIt(e, '.slide', -100);
//  parallaxIt(e, 'img', -30);
   parallaxIt(e, '.slide2',-20);
//    parallaxIt(e, '.slide3', 50zz);
   parallaxIt(e, '.slide4', -50);

}

function parallaxIt(e, target, movement){
  var $this = $('#container-h');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
 
  TweenMax.to(target, 1, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  })
}

// =====================================cursor
const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
var links=$("a")
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    // window.onmousedown = (mouse) => {
    //     mouseDown = true
    // }

    // window.onmouseup = (mouse) => {
    //     mouseDown = false
    // }

    // delayMouseFollow();
    
    links.mouseover(function(){
        var ringColor =$('.home').css("backgroundColor")
        ring.style.backgroundColor=ringColor
        ringSize="30px"


    })
    links.mouseleave(function(){
        ring.style.backgroundColor='transparent'
        ringSize="15px"

     
    })

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#fff",
            ringSize: 15,
            ringClickSize: (options["ringSize"] || 15) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        if (document.querySelector(".p-action-click:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            isHover = true
        } else {
            pointer.style.borderColor = "white"
            isHover = false
        }
        // ring.style.borderColor = getOption("pointerColor")
        // if (mouseDown) {
        //     ring.style.padding = getOption("ringClickSize") + "px"
        // } else {
        //     ring.style.padding = getOption("ringSize") + "px"
        // }
            links.mouseover(function(){
        var ringColor =$('.home').css("backgroundColor")
        ring.style.backgroundColor=ringColor
        // ringSize="30px"


    })
    links.mouseleave(function(){
        ring.style.backgroundColor='transparent'
        // ringSize="15px"

     
    })

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

init_pointer({
            
})