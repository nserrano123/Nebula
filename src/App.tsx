import Heading from './components/heading'
import NavBar from './components/nav_bar'
import Example from './components/prop_dos'
import Card from './components/card';
import ModeToggler from './mode_toggler';



function App() {
  const bool = false;
  const str1 = "just";
  
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

    </div>
  )
}

export default App
