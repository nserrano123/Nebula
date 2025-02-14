import { useState } from "react";

const MyButton = () => {

const handleState = () => {

frase === '-'? setfirst("Bienvenido a Stone"): setfirst("-")

}

const [frase, setfirst] = useState("-")

    return ( 
        <div>
            <p>{frase}</p>
            <button onClick={() => handleState()}>Click me</button>



            
        </div>

     );
}
 
export default MyButton;