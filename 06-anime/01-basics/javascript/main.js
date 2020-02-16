let targetsExample01 = anime({
  targets: '.targets .box',
  translateX: 250,
  autoplay: false
})

let targetsBtn01 = document.querySelector('#targetsBox')
targetsBtn01.onclick = targetsExample01.play

let targets02 = anime({
  targets: '.triangle',
  translateX: 150,
  autoplay: false
})

let targetsBtn02 = document.querySelector('#targetsTriangle')
targetsBtn02.onclick = targets02.play

//Вторая секция

let propsAnimation01 = anime({
  targets: '.props .box',
  translateX: 400,
  rotate: 180,
  backgroundColor: '0%', '50%'],
  autoplay: false,
  duration: 5000
})

let propsBtn01 = document.querySelector('#propsBtn01')
propsBtn01.onclick = propsAnimation01.play
