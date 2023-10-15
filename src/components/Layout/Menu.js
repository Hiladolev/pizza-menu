import Pizza from "../Pizza/Pizza";
export default function Menu({ pizzaData }) {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>
      {numOfPizzas > 0 ? (
        <>
          <p>
            Indulge in the flavors of Italy with our authentic Italian cuisine.
            Our menu features a tantalizing selection of six creatively crafted
            dishes, each meticulously prepared in our traditional stone oven.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please come back later😋</p>
      )}
    </main>
  );
}
