interface NavBarProps {
    title : string;
    color? : string ;
}


const NavBar = ({title,color}:NavBarProps) => {



    return (  

        <div className="bg-gray-900 w-4" >
            <h1>{title}</h1>
        </div>
    );
}
 
export default NavBar;


