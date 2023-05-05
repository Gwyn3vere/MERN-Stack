import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user') !== null;
    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? <Component /> : <Navigate to="/dang-nhap" replace state={{ from: rest.location }} />
            }
        />
    );
};

export default PrivateRoute;