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
root.render(<App/>);

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

const course = ["HTML", "CSS", "JavaScript", "React"];

const element = (<ul>
                  {course.map(course=><li>{course}</li>)}
                 </ul>
                );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);          


function App(props){
    return <h1>Hello Coder {props.name} {props.age}</h1>;
}

const element = <App name='Shivang' age={21}></App>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);   */ 



function Header({name}){
    return(
        <h1>{name} Welcome to India!</h1>
    );
}

function Main({country, slogan}){
    return(
        <h2> This is main part of {country} and it is very {slogan}</h2>
    );
}


function Footer({notes}){
    return(
        <>
          <p>This is a South part of the {notes.nation}</p>
          <p>It is also known as {notes.suffix} </p>
        </>
    );

}


function App() {
   return (
    <>
        <Header name="Shivang"></Header>
        <Main country="India" slogan="Beautiful"></Main>
        <Footer notes={{nation:"India", suffix:"SouthIndia"}}></Footer>
    </>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
