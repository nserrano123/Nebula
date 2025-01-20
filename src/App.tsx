import Heading from './components/Heading'
import NavBar from './components/nav_bar'
import Example from './components/prop_dos'

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
    </div>
  )
}

export default App
