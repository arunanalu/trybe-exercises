document.querySelector('#header-container').style.backgroundColor = 'green'

document.querySelector('.emergency-tasks').style.backgroundColor = 'rgb(76, 0, 191)'

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(77, 0, 91)'

let titles = document.querySelectorAll('h3');
for (let index = 0; index < titles.length; index += 1) {
  titles[index].style.backgroundColor = 'black'
}

document.querySelector('#footer-container').style.backgroundColor = 'green'