import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";

import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      
      <Header />
      <BackgroundVideo />
      <Hero />        {/* Sección Inicio */}
      <Video />
      <Main />
      
      <Footer />
    </div>
  );
};

export default App;
