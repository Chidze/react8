import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import { AppRoutes } from "./AppRoutes";
import TodosComponent from "../components/TodoComponent/TodoComponent.tsx";
import CommentComponent from "../components/CommentComponent/CommentComponet.tsx";
import AlbumsComponent from "../components/AlbumsComponent/AlbumsComponent.tsx";


const AppLayout = () => (
    <>
    <Header/>
    <Outlet/>
    </>
)

export const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElememt: <h1>Opppps, wrong route</h1>,
      children: [
        {
          path: AppRoutes.MAIN,
          element: <h1>Головна</h1>,
        },
        {
            path: AppRoutes.ALBUMS,
            element: <AlbumsComponent />,
          },
          {
              path: AppRoutes.TODOS,
              element: <TodosComponent />
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentComponent />
            }
            
      ]
    }
    
  ]);
  