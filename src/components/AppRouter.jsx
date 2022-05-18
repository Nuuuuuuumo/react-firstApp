import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../route/Routes";
import { AuthContext } from "../context";
import Loader from "../components/UI/loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader />
    }

  return (
    
    isAuth 
     ? 
      <Routes>
        {privateRoutes.map(route => 
          <Route
            key={route.path}
            element={route.element}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Route element={<Navigate to="/posts" />} />
      </Routes>
     : 
      <Routes>
        {publicRoutes.map((route) => 
          <Route
            key={route.path}
            element={route.element}
            path={route.path}
            exact={route.exact}
          />
        )}
      </Routes>
  );
};
  

export default AppRouter;
