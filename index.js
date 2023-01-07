console.log(5)

const expandButtons = document.getElementsByClassName('expandButton')
const expandableContent = document.getElementsByClassName('expandableContent');

console.log(expandButtons)
console.log(expandableContent)

for(let i = 0; i < expandButtons.length; i++) {
  expandButtons[i].addEventListener('click', () => toggleExpand(i))
}

function toggleExpand(i) {
  console.log(i);
  expandableContent[i]
  // const expandableContent = e.target.closest('.expandableContent');
  // console.log(expandableContent)
  
  if(expandableContent[i].style.display !== 'none') {
    expandableContent[i].style.display = 'none';
  } else {
    expandableContent[i].style.display = 'flex';
  }
  
}