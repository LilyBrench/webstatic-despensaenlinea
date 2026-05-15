import './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/DespensaEnLinea/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/despensaenlinea.mx/" target="_blank" rel="noopener noreferrer">
          <img src="/img/img1/instagram.png" alt="Instagram" />
        </a>
        <a href="https://wa.me/525544972959" target="_blank" rel="noopener noreferrer">
          <img src="/img/img1/whatsapp (1).png" alt="WhatsApp" />
        </a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Despensa en Línea. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
