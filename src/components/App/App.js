import MainLayout from "../Layout/MainLayout";
export default function App(props) {
  return <MainLayout pizzas={props.pizzaData} />;
}
