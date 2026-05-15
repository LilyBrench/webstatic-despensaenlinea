import "./BackgroundVideo.css";

const BackgroundVideo = () => (
  <div className="video-background">
    <video autoPlay loop muted playsInline>
        <source src="/fondo.mp4" type="video/mp4" />

      Tu navegador no soporta video en HTML5.
    </video>
    <div className="video-overlay">
      <h1>Bienvenido a mi página</h1>
      <p>Texto sobre el video de fondo</p>
    </div>
  </div>
);

export default BackgroundVideo;
