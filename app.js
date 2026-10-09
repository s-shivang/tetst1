const element1 = document.createElement('h1');
element1.textContent = "Hello Coders";
element1.className = "element";
element1.id = "first";
console.log(element1);

const root = document.getElementById('root');
root.append(element1);