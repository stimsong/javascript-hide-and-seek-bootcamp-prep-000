// Hide And Seek Lab

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const target = document.querySelector('div#nested .target');
   return target;
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for ( let i = 0; i<lis.length; i++ ) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const deep = document.querySelector('div#grand-node div div div div');
  return deep;
}