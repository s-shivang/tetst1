/* const element1 = document.createElement('h1');
element1.textContent = "Hello Coders";
element1.className = "element";
element1.id = "first";
console.log(element1);

const root = document.getElementById('root');
root.append(element1); 


function App(){
    return(
        <>
        <h1>hello world</h1>
        <h2>How are you</h2>
        </>
    );
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App/>);*/

function App(name) {
    return(
        <>
         <h1>Hello {name}</h1>
         <h2>How are you {name} ?</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App("Shivang"));

