import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from './layouts/Layout';
import { Homepage } from "./pages/Homepage";
import { AuthCallbackPage } from "./pages/AuthCallbackPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { ProtectedRoute } from "./auth/ProtectedRoute";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout showHero={true}><Homepage /></Layout>} />
            <Route path='/auth-callback' element={<AuthCallbackPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/user-profile' element={<Layout><UserProfilePage /></Layout>} />
            </Route>
            <Route path='/header' element={<Header />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};