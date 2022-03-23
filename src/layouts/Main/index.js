import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav className="minav">
        <div>
          <img src="https://www.pngfind.com/pngs/m/228-2282843_iconos-png-icono-alternativas-png-transparent-png.png" alt="" height={50} />
        </div>
        <div>
          <ul className="ul-nav">
            <li className="li-nav">
              <Link to="/">Pokemon</Link>
            </li>
            <li className="li-nav">
              <Link to="/flags">Banderas</Link>
            </li>
            <li className="li-nav">
              <Link to="/youtube">Youtube</Link>
            </li>
          </ul>
        </div>
      </nav>
       {/* Esto va recibir los componentes hijos */}
       <Outlet />
    </div>
  );
};

export default Main;