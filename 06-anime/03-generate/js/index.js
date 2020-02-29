// создаем переменную, внутри которой храним
// количество прямоугольников
let divsNumber = 10

// создаем цикл, который повторяет выполнение
// кода столько раз, сколько мы указали
// в перемиенной divsNumber
for (let i = 0; i < divsNumber; i+=1) {
  // создаем пустой тег <div></div>
  // и сохраняем в переменную div
  let div = document.createElement('div')

  // случайно выбираем из массива
  // внешний вид дива: либо прямоугольник,
  // либо круг по функциям, которые описаны
  // снизу под циклом
  div.style.cssText = [makeRect(), makeCircle()][anime.random(0,1)]
  // больше информации о том, как работаю
  // массивы: https://learn.javascript.ru/array

  // добавляем диву стили
  // используем ${} вместе со скобками ``
  // чтобы вставлять переменные внутрь строк
  // подробнее: https://learn.javascript.ru/string
  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

  // задаем функцию, которая срабатывает
  // по наведению курсора
  div.onmouseenter = function(event) {
    // браузер передает в эту функцию событие
    // мы можем получить доступ к событию
    // через параметр event (название может быть любым,
    // но обычно используют "event" или "e")
    event.target.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
    // у события есть куча свойств
    // например, target — это объект, на котором
    // сработало событие
    // https://learn.javascript.ru/introduction-browser-events
    // https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave
    // https://learn.javascript.ru/mouse-events-basics
  }

  document.body.append(div)
}

function makeRect(element) {
  return `
    width: ${anime.random(0, 500)}px;
    height: ${anime.random(0, 500)}px;
  `
}

function makeCircle(element) {
  let size = anime.random(0, 500)
  return `
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
  `
}




//
