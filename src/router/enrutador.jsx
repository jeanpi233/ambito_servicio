import Login from "../pages/Login";
import ListaServicio from "../pages/ListaServicio";
import VistaServicio from "../pages/VistaServicio";
import ListaUsuario from "../pages/ListaUsuario";
import VistaFinal from "../pages/VistaFinal";


export let enrutador = [
    {
        path: "/",
        element: <Login />,
      },
    {
      path: "/listaServicio",
      element: <ListaServicio />,
    },
    {
      path: "/vistaServicio",
      element: <VistaServicio />,
    },
    {
      path: "/listaUsuario",
      element: <ListaUsuario/>,
    },
    {
        path: "/vistaFinal",
        element: <VistaFinal />,
      },
  ];
