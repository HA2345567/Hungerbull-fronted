import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from './layouts/Layout';
import { Homepage } from "./pages/Homepage";
import { AuthCallbackPage } from "./pages/AuthCallbackPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { ManageRestaurantPage } from "./pages/ManageRestaurantPage";
import {SearchPage} from "./pages/SearchPage";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout showHero={true}><Homepage /></Layout>} />
            <Route path='/auth-callback' element={<AuthCallbackPage />} />
            <Route path="/search/:city" element={<Layout showHero={false}><SearchPage /></Layout>} />
            <Route element={<ProtectedRoute />}>
                <Route path='/user-profile' element={<Layout><UserProfilePage /></Layout>} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/manage-restaurant' element={<Layout><ManageRestaurantPage /></Layout>} />
            </Route>
            <Route path='/header' element={<Header />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};