const expandButtons = document.getElementsByClassName('expandButton')
const expandableContent = document.getElementsByClassName('expandableContent');

const heroCTAButton = document.getElementById('heroCTAButton');
registerButton = document.getElementById('registerButton');
const registerFormWrapperOuter = document.getElementsByClassName('registerFormWrapperOuter')[0];
const heroCTA = document.getElementsByClassName('heroCTA')[0];

heroCTAButton.addEventListener('click', displayRegisterForm);
registerButton.addEventListener('click', displayCTA);


for(let i = 0; i < expandButtons.length; i++) {
  expandButtons[i].addEventListener('click', () => toggleExpand(i))
}

function toggleExpand(i) {
  // toggle expandable content and:  
  // if nav expand button, block scrolling when expanded
  // if chevron expand button, rotate chevron 180deg
  
  if(i === 0) {
    if(expandableContent[i].style.display === 'none' || expandableContent[i].style.display === '') {
      expandableContent[i].style.display = 'flex';
      console.log('should not scroll')
      document.body.style.overflowY = 'hidden';
    } else {
      expandableContent[i].style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  } else {
    if(expandableContent[i].style.display === 'none' || expandableContent[i].style.display === '') {
      expandButtons[i].style.transform = 'rotate(180deg)'
      expandableContent[i].style.display = 'flex';
    } else {
      expandButtons[i].style.transform = 'rotate(0deg)'
      expandableContent[i].style.display = 'none';
    }
  }
}

function displayRegisterForm() {
  registerFormWrapperOuter.style.display = 'flex';
  heroCTA.style.display = 'none';
}

function displayCTA() {
  setTimeout(() => {
    registerFormWrapperOuter.style.display = 'none';
    heroCTA.style.display = 'block';
  }, 1000);
}
