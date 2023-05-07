// OrtherLayout
import { OrtherLayout, AdminLayout } from '~/components/Layout';

// AdminLayout
import Overview from '~/page/admin/Overview';
import Createroom from '~/page/admin/Managerment/Room/Createroom';
import Room from '~/page/admin/Managerment/Room';

// CustomerLayout
import Home from '~/page/customer/Home';
import Rooms from '~/page/customer/Rooms';
import Details from '~/page/customer/Details';
import Order from '~/page/customer/Order';
import Login from '~/page/customer/Login';
import Register from '~/page/customer/Register';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: OrtherLayout },
    { path: '/phong', component: Rooms },
    { path: '/chi-tiet', component: Details },
    { path: '/dang-nhap', component: Login, layout: null },
    { path: '/dang-ky', component: Register, layout: null },
];

// Private routes
const privateRoutes = [
    { path: '/overview', component: Overview, layout: AdminLayout, role: ['admin'] },
    { path: '/create-room', component: Createroom, layout: AdminLayout, role: ['admin'] },
    { path: '/room', component: Room, layout: AdminLayout, role: ['admin'] },
    { path: '/dat-phong', component: Order, role: ['customer', 'admin'] },
];

export { publicRoutes, privateRoutes };
