import Router from "next/router";
import styles from "../styles/Home.module.css";
import Navigation from "https://framer.com/m/Navigation-RLKg.js@XwUZuYPUJKtCxcOD7hRZ";
import PricingCardsCopy from "https://framer.com/m/Pricing-Cards-Copy-jih9.js@zUfuWzDh2pRyQmjksUrT";

export default function Home() {
  const handleClick = () => {
    Router.push("/products");
  };
  return (
    <div className={styles.container}>
      <Navigation />
      <h1>This is the home page.</h1>
      <button onClick={handleClick} className="nextButton">
        Products
      </button>
      <PricingCardsCopy />
    </div>
  );
}
