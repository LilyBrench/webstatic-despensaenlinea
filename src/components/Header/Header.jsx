


import styles from "./Header.module.css";


const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <img src="data:image/png;base64,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"></img>
    

    


    
    </div>

    <nav className={styles.nav}>
      <ul className={styles.menu}>
            <li><a href="#inicio">Inicio</a></li>
                <li className={styles.submenu}> 

                 <a href="#nosotros">Nosotros</a>
                   <ul className={styles.dropdown}>
                             
                  
                    <li><a href="#quienes-somos">Quiénes somos</a></li>
                    <li><a href="#mision">Misión</a></li>
                    <li><a href="#vision">Visión</a></li> 
                              

                  </ul>
    
             </li>
                
            <li><a href="#productos">Productos</a></li>
            <li><a href="#proveedores">Proveedores</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
            
              <li><a href="#contacto">Contacto</a></li>
      
          
                
                     
            </ul>   
    </nav>
  </header>

  
);

export default Header;
