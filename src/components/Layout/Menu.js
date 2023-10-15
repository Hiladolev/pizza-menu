import Pizza from "../Pizza/Pizza";
export default function Menu({ pizzaData }) {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>
      {numOfPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu.Please come back later😋</p>
      )}
    </main>
  );
}
