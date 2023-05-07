import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { CustomerLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
    // Kiểm tra xem người dùng có đang đăng nhập hay không
    const isLoggedIn = () => {
        return localStorage.getItem('token');
    };
    console.log(isLoggedIn());

    // Kiểm tra xem người dùng có quyền truy cập vào route này hay không
    const hasAccess = (route) => {
        const userRole = localStorage.getItem('role');

        if (!isLoggedIn()) {
            return false;
        }

        if (!route.role || route.role.includes(userRole)) {
            return true;
        }

        return false;
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = CustomerLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        let Layout = CustomerLayout;
                        const Page = route.component;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    isLoggedIn() && hasAccess(route) ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : (
                                        <Navigate to="/" />
                                    )
                                }
                                role={route.role}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
