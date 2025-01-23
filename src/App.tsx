import Heading from './components/heading'
import NavBar from './components/nav_bar'
import Example from './components/prop_dos'
import Card from './components/card';
import ModeToggler from './mode_toggler';



function App() {
  const bool = false;
  const str1 = "just";
  
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }


  return (
    <div className="App">
    <NavBar  title='Natalia'></NavBar>
    <Heading firstname = "Bob"></Heading>
    <Heading firstname = "Natalia"></Heading>
    <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
    <Card h2="Card Title" h3="Card Subtitle"></Card>
    {/* <ModeToggler /> */}
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick = { handleClick }> Guess the number between 1 and 3</button>
    </div>
    </div>
    
  )
}

export default App
