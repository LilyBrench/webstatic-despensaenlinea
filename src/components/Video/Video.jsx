import styles from './Video.module.css';

const Video = () => (
  <section className={styles.videoSection}>
    <h2>Tips de compras de despensa</h2>
    <div className={styles.videoContainer}>
      <iframe 
        width="80" 
        height="100" 
        src="https://www.youtube.com/embed/rK8EDyvd9b8" 
        title="YouTube video player" 
        frameBorder="10" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default Video;
