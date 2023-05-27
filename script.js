const body = document.body

// adds a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.style.color = "red";
p.textContent = "Hey I'm red!";
body.append(p);

// adds an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
body.append(h3);



const div = document.createElement('div');
div.setAttribute('style', 'border: thick solid black; background: pink;'); 
div.textContent = 'Hi';

const h1 = document.createElement('h1');
div.textContent = "I'm in a div";

const p1 = document.createElement('p');
p1.textContent = "ME TOO!";

  
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
''
div.appendChild(h1)
div.appendChild(p1)
body.append(div);

