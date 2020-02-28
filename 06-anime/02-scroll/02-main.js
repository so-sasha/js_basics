let controller = new ScrollMagic.Controller()

let $box2 = document.getElementById('box-2')

let box2Anim = anime({
  targets: $box2,
  translateX: [0, '80vw'],
  rotate: [0, 360 * 5],
  autoplay: false,
  easing: 'linear'
})

let $section2 = document.getElementById('section-2')

new ScrollMagic.Scene({
  triggerElement: '#section-2',
  duration: $section2.getBoundingClientRect().height
})
.addTo(controller)
.setPin($box2)
.on('progress', function(event) {
  box2Anim.seek(box2Anim.duration * event.progress)
})


// Пример 3

let $lastSection = document.getElementById('section-3')
let $loader = document.getElementById('loader')

let lastScene = new ScrollMagic.Scene({
  triggerElement: $loader,
  triggerHook: 'onEnter'
})
.addTo(controller)
.on('enter', function() {
  setTimeout(addCircles, 1500, 5);
})

function addCircles(num) {
  let count = 0
  while (count < num) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('circle')
    newDiv.style.backgroundColor = getRandomRGBColor()
    $lastSection.append(newDiv)
    count += 1
  }
}

function getRandomRGBCode() {
  return Math.round(Math.random() * 255)
}

function getRandomRGBColor() {
  return `rgb(${getRandomRGBCode()}, ${getRandomRGBCode()}, ${getRandomRGBCode()})`
}




// let makeMoveDownAnim = function($id) {
//   return anime({
//     targets: $id,
//     translateX: [0, '80vw'],
//     rotate: [0, 360 * 5],
//     autoplay: false,
//     easing: 'linear'
//   })
// }

//
