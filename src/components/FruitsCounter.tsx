import React from "react";

// Definimos la interfaz para el tipo de cada fruta
interface Fruit {
    id: number;
    fruitName: string;
}

// Definimos el tipo de la prop `fruits` como un array de `Fruit`
interface FruitsCounterProps {
    fruits: Fruit[];
}

const FruitsCounter: React.FC<FruitsCounterProps> = ({ fruits }) => {
    return (
        <h2>Total fruits: {fruits.length}</h2>
    );
};

export default FruitsCounter;
