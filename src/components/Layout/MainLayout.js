import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
export default function MainLayout(props) {
  return (
    <div className="container">
      <Header />
      <Menu pizzas={props.pizzas} />
      <Footer />
    </div>
  );
}
