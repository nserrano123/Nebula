interface HeadingProps {
    firstname : string;
}

const Heading = ({ firstname }: HeadingProps) => {
    return (<h1>Hello, {firstname}</h1>);
}
 
export default Heading;



