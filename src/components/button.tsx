

interface ButtonProps

{
icon: string | React.ReactNode
name: string
onClick: () => void

}

const Button = ({icon, name, onClick}: ButtonProps)  => 

    {
        return (
                <div onClick = {onClick} className = "select-none transition-background ease-in duration-20 cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md h-7 px-2 py-1 text-xs leading-tight border border-gray-400 text-gray-600 font-medium" >

                </div>

        );

    }

    export default Button;