
import DrillApp from './components/drillapp';
import InputComponent from './components/input_component';
import MyButton from './components/mybutton';
import RegisterForm from './components/register_form';



function App2() {


  return (
<div>
  <div style={{ border: "10px solid lightgray" }}> 
  <h1>Button</h1>
    <MyButton></MyButton>

  </div>

  <div style={{ border: "10px solid lightgray" }}> 
    <h1>Imput Component</h1>
    <InputComponent></InputComponent>
    </div>

    <h1>Register Form</h1>
    <RegisterForm></RegisterForm>

    <h1>DrillApp</h1>
    <DrillApp></DrillApp>



   </div>

  )
}

export default App2
