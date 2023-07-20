import Navar from "./Navar";
import { useAuth } from "../context/authContext";
import PruebaMedidor from "./PruebaMedidor";


export function Home() {
  const {logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Navar/>
      <div className="containerTarjeta">
      <PruebaMedidor/>
      <PruebaMedidor/>
      <PruebaMedidor/>
      </div>
      
    </>
  );

  // <h1>Bienvenido {user.email}</h1>

  // <button onClick={handleLogout}>Salir</button>
}
