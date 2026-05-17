
import styles from './Main.module.css';
import Mapa from '../Mapa/Mapa';
import ProductCard from '../ProductCard/ProductCard';
import React, { useState } from "react";

const Main = () => {
  // 1. Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  // 2. Manejo de cambios
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Manejo de envío
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://tu-servidor.com/api/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formulario enviado correctamente");
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor");
    }
  };

  // 4. JSX del componente
  return (
    <main className={styles.main}>
      {/* Sección Quiénes somos */}
      <section id="quienes-somos" className={styles.about}>
        <center><h2>¿Quiénes somos?</h2></center>
        <p>Despensa en Línea somos una iniciativa dedicada a acercar productos básicos de calidad directamente a tu hogar.</p>
      </section>

      {/* Sección Misión */}
      <section id="mision" className={styles.about}>
        <center><h2>Misión</h2></center>
        <p>Nuestra misión es ser un puente entre productores y consumidores.</p>
      </section>

      {/* Sección Visión */}
      <section id="vision" className={styles.about}>
        <center><h2>Visión</h2></center>
        <p>Convertirnos en la plataforma líder de distribución de productos de despensa en México.</p>
      </section>

      {/* Sección Productos */}
      <section id="productos" className={styles.about}>
        <center><h2>Productos que ofrecemos</h2></center>
        <div className={styles.productGrid}>
          <ProductCard image="..." title="ACEITES" price="00001" />
          <ProductCard image="..." title="BEBIDAS" price="00002" />
          <ProductCard image="..." title="BOTANAS" price="00003" />
          <ProductCard image="..." title="BEBES" price="00004" />
        </div>
      </section>

      {/* Sección Ubicación */}
      <section id="ubicacion" className={styles.about}>
        <center><h2>Ubicación</h2></center>
        <p>Nos encontramos en Villa de Canalejas, Jilotepec de Molina Enríquez, Estado de México.</p>
        <Mapa />
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className={styles.about}>
        <center><h2>Contacto</h2></center>
        <p>Envíanos tu mensaje y te contactamos inmediatamente.</p>

        <form onSubmit={handleSubmit} name="contacto" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contacto" />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Main;
