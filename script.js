document.getElementById("cpict").addEventListener('click', changePicture)

document.getElementById("ctext").addEventListener('click', changeText)

document.getElementById("tvis").addEventListener('click', textVisible)

document.getElementById("tinvis").addEventListener('click', textInvisible)

document.getElementById("cbg").addEventListener('click', changeBg)

function changePicture () {
  document.getElementById('image').src = 'images/mississauga.jpg'
}

function changeText () {
  document.getElementById('text').innerHTML = 'New text'
}

function textVisible () {
  document.getElementById('text').style.display = 'block'
}

function textInvisible () {
  document.getElementById('text').style.display = 'none'
}

function changeBg () {
  document.body.style.backgroundColor = 'red'
}