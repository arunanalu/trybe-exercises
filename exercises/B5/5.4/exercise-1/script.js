document.onload = onLoadSettings();

function onLoadSettings () {
  let sectionText = document.getElementById('sectionText');
  sectionText.style.backgroundColor = localStorage.getItem('background');
  sectionText.style.color = localStorage.getItem('textColor');
  sectionText.style.fontSize = localStorage.getItem('fontSize');
  sectionText.style.lineHeight = localStorage.getItem('lineSpace');
  sectionText.style.fontFamily = localStorage.getItem('font');
}

function addBgEvents () {
  let buttons = document.getElementsByClassName('bg');
  for (let index of buttons) {
    index.addEventListener('click', function(event){
      sectionText.style.backgroundColor = event.target.innerText;
      localStorage.setItem('background', event.target.innerText);
    })
  }
}

addBgEvents ();

function addTextColor () {
  let buttons = document.getElementsByClassName('color');
  for (let index of buttons) {
    index.addEventListener('click', function(event){
      sectionText.style.color = event.target.innerText;
      localStorage.setItem('textColor', event.target.innerText);
    })
  }
}

addTextColor ();

function addTextSize () {
  document.getElementById('tSize').addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
      let number = parseInt(event.target.value); 
      let fontSize = number + 'px'
      sectionText.style.fontSize = fontSize;
      event.target.value = '';
      localStorage.setItem('fontSize', fontSize);
    }
  })
  
}

addTextSize ();

function addLineSpace () {
  document.getElementById('lSpace').addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
      let number = parseInt(event.target.value);
      let lineSpace = number + 'px';
      sectionText.style.lineHeight = lineSpace;
      event.target.value = '';
      localStorage.setItem('lineSpace', lineSpace);
    }
  })
}

addLineSpace ();


function addFontFamily () {
  let family = document.getElementsByClassName('fFamily');
  for (let index of family) {
    index.addEventListener('click', function(event) {
      if (event.target.innerText === '1') {
        let font = 'Courier';
        sectionText.style.fontFamily = font;
        localStorage.setItem('font', font);

      }
      else if (event.target.innerText === '2') {
        let font = 'Arial';
        sectionText.style.fontFamily = font;
        localStorage.setItem('font', font);
      }
    })
  }
}

addFontFamily ();