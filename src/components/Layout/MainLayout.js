import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
export default function MainLayout({ pizzas }) {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzas} />
      <Footer />
    </div>
  );
}
