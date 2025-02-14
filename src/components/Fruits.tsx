import React from "react";

interface Fruit {
    id: number;
    fruitName: string;
}

interface FruitsProps {
    fruits: Fruit[];
}

const Fruits: React.FC<FruitsProps> = ({ fruits }) => {
    return (
        <div>
            
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    );
};

export default Fruits;

