import { getAllUsers } from "../users";
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams
} from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const users = getAllUsers();
  const filter = searchParams.get("filter") ?? ""; // Es porque al value de un input no se le puede pasar indefinido

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        value={filter}
        onChange={handleFilter}
        type="text"
        placeholder="filter"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
          {users
            .filter((user) => {
              // Si no hay ningun filtro configurado en mi ruta, el elemento se mantiene
              if (!filter) return true;
              const name = user.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((user) => (
              <li key={user.id}>
                <h2>
                  <NavLink
                    style={({ isActive }) => (isActive ? { color: "red" } : {})}
                    // className={({isActive}) => isActive ? "active" : ""}
                    to={user.id.toString() + location.search} // Es para no perder el filtro al seleccionar 1usr
                  >
                    {user.name}
                  </NavLink>
                </h2>
              </li>
            ))}
        </ul>
        {/* El outlet sirve para poder mostrar en la misma pantalla los detalles del usuario */}
        <article>
          <Outlet />
        </article>
      </div>
    </div>
  );
};

export default Users;
