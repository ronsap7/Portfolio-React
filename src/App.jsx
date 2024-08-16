import { Navbar } from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    </div>
  );
}

export default App;
