import React from "react";
// import Fruits from "./components/Fruits";
// import FruitsCounter from "./components/FruitsCounter";
import DessertsList from "./desserts_ist";

const isLowCalorie = true;
const desserts = [
  { id: 1, name: "Chocolate Cake", calories: 400, createdAt: "2022-09-01" },
  { id: 2, name: "Ice Cream", calories: 200, createdAt: "2022-01-02" },
  { id: 3, name: "Tiramisu", calories: 300, createdAt: "2021-10-03" },
  { id: 4, name: "Cheesecake", calories: 600, createdAt: "2022-01-04" },
];

function App() {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  // Ordena los postres por calorías (ascendente)
  const sortedDesserts = [...desserts].sort((a, b) => a.calories - b.calories);

  return (
    // <div>
    //   <div className="App">
    //     <h1>Where should the state go?</h1>
    //     <div>
    //       {fruits.map((fruit) => (
    //         <div key={fruit.id}>{fruit.fruitName}</div>
    //       ))}
    //     </div>
    //     <FruitsCounter fruits={fruits} />
    //     <Fruits fruits={fruits} />
    //   </div>

      <div>
        <h2 style={{ color: isLowCalorie ? "green" : "red" }}>
          List of low calorie desserts:
        </h2>
        <DessertsList data={sortedDesserts} />
      </div>
    // </div>
  );
}

export default App;

