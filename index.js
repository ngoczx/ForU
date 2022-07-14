let elem = document.querySelector('.no');
let yes = document.querySelector('.yes');
let audio = document.querySelector('#audio');
let popup = document.querySelector('.popup-content');
let main = document.querySelector('.main-content');

const changePosition = () => {
  elem.style.position = 'absolute';
  elem.style.top = Math.floor(Math.random() * 801);
  elem.style.left = Math.floor(Math.random() * 401);

  //   console.log(Math.random());
};

yes.onclick = () => {
  popup.classList.add('yes');
  //   container.innerHTML = "<div class='container none'></div>";

  main.classList.add('none');
  //   audio.play();
};
elem.onclick = changePosition;
elem.onmouseover = changePosition;
