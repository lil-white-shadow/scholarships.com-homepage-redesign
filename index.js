const expandButtons = document.getElementsByClassName('expandButton')
const expandableContent = document.getElementsByClassName('expandableContent');

for(let i = 0; i < expandButtons.length; i++) {
  expandButtons[i].addEventListener('click', () => toggleExpand(i))
}

function toggleExpand(i) {
  if(expandableContent[i].style.display === 'none' || expandableContent[i].style.display === '') {
    expandButtons[i].style.transform = 'rotate(180deg)'
    expandableContent[i].style.display = 'flex';
  } else {
    expandButtons[i].style.transform = 'rotate(0deg)'
    expandableContent[i].style.display = 'none';
  }
}
