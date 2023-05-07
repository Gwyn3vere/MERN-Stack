import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { CustomerLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
    // Kiểm tra xem người dùng có đang đăng nhập hay không
    const isLoggedIn = () => {
        return !!localStorage.getItem('token');
    };

    // Kiểm tra xem người dùng có quyền truy cập vào route này hay không
    const hasAccess = (route) => {
        const userRole = localStorage.getItem('role');

        // Kiểm tra nếu route không có cấu hình role thì mặc định cho phép truy cập
        if (!route.role) {
            return true;
        }

        // Kiểm tra xem người dùng có đủ quyền để truy cập vào route hay không
        return route.role.includes(userRole);
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
                                        <Navigate to="/dang-nhap" />
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
