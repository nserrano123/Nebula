const ModeToggler = () => {

    const darkModeOn = false;
    const darkMode = <h1> Dark Mode is on </h1>
    const LightMode = <h1> Light Mode is on </h1>

    function hadleClick(){
        darkModeOn = !darkModeOn;
        if (darkModeOn === true)
            {
            console.log('Dark Mode is on');
            else{   
                console.log('Light Mode is on');
            }
          
        }
    }

    return ( 

        <>

            <div className="mode-toggler">
                <input type="checkbox" id="mode-toggler" />
                <label htmlFor="mode-toggler" className="mode-toggler-label"></label>
            </div>
            
            <div> {darkModeOn ? darkMode: LightMode}
                <button onClick={handleClick}> Toggle Mode </button>
            </div>



        </>

     );
}
 
export default ModeToggler;