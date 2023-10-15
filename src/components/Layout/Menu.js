import Pizza from "../Pizza/Pizza";
export default function Menu(props) {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <ul className="pizzas">
        {props.pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
