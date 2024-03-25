import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DefaultLayout = () => {
  const {user, token } = useStateContext();


  if (!token) {
    return <Navigate to="/login" />;
  }
 



  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <header>
          <Header user={user}/>
        </header>
        <main>
        <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
