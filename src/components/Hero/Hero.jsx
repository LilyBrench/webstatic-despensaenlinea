import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero} id="inicio">
    <h1>Bienvenido</h1>
    <p>¡Surte tu despensa, 
    para que no falte nada en tu mesa!</p>
    <button className={styles.btn}>Comprar</button>
  </section>
);



export default Hero;
