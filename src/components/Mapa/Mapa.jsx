const Mapa = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29998.47268098066!2d-99.6101339!3d19.9745296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d249b8cf0a8e85%3A0x56dad4c23ef564f7!2sDespensa%20En%20L%C3%ADnea%20www.despensaenlinea.mx!5e0!3m2!1ses-419!2smx!4v1778610093226!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"



        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de ubicación"
      ></iframe>
    </div>
  );
};

export default Mapa;
