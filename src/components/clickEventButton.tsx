const clickEventButton = () => {

    function handleClick() { 
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number'); 
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
      }
    return (
        <div>
            <button onClick={handleClick}>
                Adivina el numero entre 1 y 3
            </button>
        </div>
    )
}

export default clickEventButton;