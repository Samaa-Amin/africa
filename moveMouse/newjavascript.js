var timeout;
$('#container-h').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
  
});

function callParallax(e){
  parallaxIt(e, '.slide', -100);
//  parallaxIt(e, 'img', -30);
   parallaxIt(e, '.slide2',-150);
   parallaxIt(e, '.slide3', 50);
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