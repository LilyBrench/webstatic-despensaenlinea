
import styles from './Main.module.css';
import Mapa from '../Mapa/Mapa';
import ProductCard from '../ProductCard/ProductCard';

import CampoInput from '../Formulario/CampoInput';
import CampoTextarea from '../Formulario/CampoTextarea';
import React, { useState } from "react";








const Main = () => (
  <main className={styles.main}>
         const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

    
    {/* Sección Quiénes somos */}
    <section id="quienes-somos" className={styles.about}>
     <center><h2>¿Quiénes somos?</h2></center> 
      <p>
          Despensa en Línea somos una iniciativa dedicada a acercar productos básicos de 
          calidad directamente a tu hogar, con atención personalizada y compromiso con nuestros clientes.

      </p>
      <p>
      
        Nuestro propósito es apoyar a las familias de la región para acercar los productos,fomentar el consumo
        responsable y fortalecer la economía comunitaria.
 
      </p>
</section>
     {/* Sección Mision*/}
    <section id="mision" className={styles.about}>
     <center> <h2>Misión</h2></center>



  <p>Nuestra misión es ser un puente entre productores y consumidores, 
promoviendo la identidad cultural y el orgullo por lo local, mientras impulsamos prácticas responsables que beneficien a todos.
</p>

    </section>

    {/* Sección Vision */}
    <section id="vision" className={styles.about}>
     <center><h2>Visión</h2></center> 
      <p>
          Convertirnos en la plataforma líder de distribución de productos de despensa en México,
        reconocida por su accesibilidad digital, compromiso con productores locales y promoción de un 
        consumo responsable que fortalezca la economía comunitaria.
      </p>
       </section>

     {/* Sección Productos*/}
    <section id="productos" className={styles.about}>  
     <center> <h2>Productos que ofrecemos</h2></center> 
     <div className={styles.productGrid}>
     <ProductCard
          image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/2007.png"
          title="ACEITES"
          price=" 00001"
          
        /> 
      
     
        <ProductCard
          image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/107992.png"
          title="BEBIDAS"
           price=" 00002"
        />
    
     
        <ProductCard
          image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/104939.png"
          title="BOTANAS"
          price=" 00003"
        />
      
     
        <ProductCard
          image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/104203.png"
          title="BEBES"
          price=" 00004"
        />
</div>
   </section>


{/* Sección proveedores*/}
<section id="proveedores" className={styles.about}>
  <center><h2>Proveedores</h2></center>
  <table>
        <thead>
          <tr>
            <th><center>Nombre de la empresa</center></th>
            <th><center>Domicilio</center></th>
            <th><center>Correo</center></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grupo Bimbo</td>
            <td> Av. Paseo de la Reforma 1000, Col. Peña Blanca Santa Fe, CDMX.</td>
            <td>servicioalcliente@grupobimbo.com</td>
          </tr>
          <tr>
            <td>Gruma</td>
            <td>Av. La Rioja 235, Col. Residencial Santa Bárbara, San Pedro Garza García, NL</td>
            <td>ir@gruma.com</td>
          </tr>
          <tr>
            <td>Grupo Lala</td>
            <td>Av. Paseo de la Reforma 250, Juárez, CDMX.</td>
            <td>lala800@grupolala.com</td>
          </tr>
        </tbody>
      </table>
  
</section>



   {/* Sección ubicacion*/}
<section id="ubicacion" className={styles.about}>
  <center><h2>Ubicación</h2></center>
  <p>Nos encontramos en Villa de Canalejas,Jilotepec de Molina Enríquez, Estado de México.</p>
  <Mapa />
</section>









{/* Sección contactanos*/}
<section id="contacto" className={styles.about}>
  <center><h2>Contacto</h2></center>
  <center><p>Envianos tu mensaje y te contactamos inmediatamente.</p></center>
<p>
      <form onSubmit={handleSubmit}
       name="contacto" method="POST" data-netlify="true"
        input type="hidden" name="form-name" value="contacto" />


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
  );
}
    
</p>

 
</section>



  </main>
    
);

export default Main;
