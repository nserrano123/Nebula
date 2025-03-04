import React from "react";

function FetchExample() {
  const [user, setUser] = React.useState<any>(null);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return user ? (
    <div>
      <h1>Customer data</h1>
      <h2>Name: {user.name.first}</h2>
      <img
        src={user.picture.large}
        alt = "user_image"
      />

    </div>
  ) : (
    <h1>Por favor espera mientras busco una inforacion del registro...</h1>
  );
}

export default FetchExample;