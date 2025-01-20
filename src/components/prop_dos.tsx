interface ExampleProps {
    toggleBoolean : boolean;
    math : number;
    str : string;
}


const Example = ({ toggleBoolean,math,str }: ExampleProps) => {
    return (     
    <div>
        <h2>
            The value of the toggleBoolean prop is:{toggleBoolean.toString()}
        </h2>
        <p>The value of the math prop is: <em>{math}</em></p>
        <p>The value of the str prop is: <em>{str}</em></p>
    </div>);
}
 
export default Example;


