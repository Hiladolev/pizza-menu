import Pizza from "../Pizza/Pizza";
export default function Menu({ pizzas }) {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
