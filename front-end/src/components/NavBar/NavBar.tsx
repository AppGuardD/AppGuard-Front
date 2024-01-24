import style from './NavBar.module.css';

export default function NavBar(props){
  const handleLogIn = () => {
    props.login();
  } 

  return(    
    <div className={style.nav}>
      <div className={style.logo}>
          <span>Guardavidas</span>
      </div>

      <div className={style.searchBar}> 
        
      </div>

      <div className={style.navButtons}>
          <button className={style.button}>DONACIONES </button>
        
          <button className={style.button}>MANGRULLOS</button>
        
          <button className={style.button}>QUIENES SOMOS</button>
        <div>
          <button className={style.button} onClick={handleLogIn}>INICIAR SESION</button>
        </div>
      </div>
    </div>
  );  
}
