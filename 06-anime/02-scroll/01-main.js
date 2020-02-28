let controller = new ScrollMagic.Controller()

let box2 = document.getElementById('box-2')

let box2Anim = anime({
  targets: box2,
  translateX: 300,
  rotate: [0, 360],
  autoplay: false,
  duration: 1400
})

new ScrollMagic.Scene({
  triggerElement: box2
})
.addTo(controller)
.on('enter', function() {
  if (!box2Anim.completed) {
    box2Anim.play()
  }
})







//
