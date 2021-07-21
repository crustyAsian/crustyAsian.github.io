let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tumblr_b617067a142baa872c408649c0873855_01c0e28c_500.jpg') {
      myImage.setAttribute('src','images/tumblr_b617067a142baa872c408649c0873855_01c0e28c_500.jpg');
    } else {
      myImage.setAttribute('src','images/tumblr_b617067a142baa872c408649c0873855_01c0e28c_500.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  