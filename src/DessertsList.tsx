interface DessertProp {
  id: number;
  name: string;
  calories: number;
  createdAt: string;
}

const DessertsList = ({ data }: { data: DessertProp[] }) => {
  const lowCaloriesDesserts = data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => (
      <li key={dessert.id}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ));

  return <ul>{lowCaloriesDesserts}</ul>;
};

export default DessertsList;


