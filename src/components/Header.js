import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="menuHeader">
          <div className="menuHeader__logoBusqueda">
            <h3>ShopApi</h3>
            <input placeholder="Buscar" />
          </div>
          <div className="menuHeader__menuNav">
            <Link className="">Inicio</Link>
            <Link>Nosotros</Link>
            <Link>Contacto</Link>
            <Link>Tienda</Link>
          </div>
          <div className="menuHeader__login">
            <Link>Mi cuenta</Link>
            <Link>Carrito</Link>
          </div>
        </div>
        <div className="titleHeader">
          <div className="titleHeader__none"></div>
          <div className="titleHeader__title">
            <h1>Encuentra Todo lo que Necesitas en un Solo Lugar</h1>
          </div>
        </div>
        <div className="filtroHeader"> </div>
      </header>
    </>
  );
};
export default Header;
