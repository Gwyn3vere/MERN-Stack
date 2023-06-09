// OrtherLayout
import { OrtherLayout, AdminLayout, MobileLayout } from '~/components/Layout';

// AdminLayout
import Overview from '~/page/admin/Overview';
import Createroom from '~/page/admin/Managerment/Room/Createroom';
import Updateroom from '~/page/admin/Managerment/Room/Updateroom';
import Room from '~/page/admin/Managerment/Room';
import Order from '~/page/admin/Managerment/Order';

// CustomerLayout
import Home from '~/page/customer/Home';
import Rooms from '~/page/customer/Rooms';
import Details from '~/page/customer/Details';
import Booking from '~/page/customer/Booking';
import Login from '~/page/customer/Login';
import Register from '~/page/customer/Register';
import Settings from '~/page/customer/Settings';
import Account from '~/page/admin/Managerment/Account';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: OrtherLayout },
    { path: '/phong', component: Rooms },
    { path: '/chi-tiet/:slugRoom', component: Details },
    { path: '/dang-nhap', component: Login, layout: null },
    { path: '/dang-ky', component: Register, layout: null },
];

// Private routes
const privateRoutes = [
    { path: '/overview', component: Overview, layout: AdminLayout, role: ['admin'] },
    { path: '/create-room', component: Createroom, layout: AdminLayout, role: ['admin'] },
    { path: '/update-room/:_id', component: Updateroom, layout: AdminLayout, role: ['admin'] },
    { path: '/rooms', component: Room, layout: AdminLayout, role: ['admin'] },
    { path: '/accounts', component: Account, layout: AdminLayout, role: ['admin'] },
    { path: '/orders', component: Order, layout: AdminLayout, role: ['admin'] },
    { path: '/dat-phong', component: Booking, role: ['customer', 'admin'] },
    { path: '/cai-dat', component: Settings, layout: MobileLayout, role: ['customer', 'admin'] },
];

export { publicRoutes, privateRoutes };
