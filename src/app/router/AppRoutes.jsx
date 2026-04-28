import { Routes, Route } from "react-router-dom"
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx"
import { DashboardPage } from "../layaouts/DashboardPage.jsx"
import { Users } from "../../features/users/components/Users.jsx"
import { Fields } from "../../features/fields/components/Fields.jsx"
import { VerifyEmailPage } from "../../features/auth/pages/VerifyEmailPage.jsx"
import { RoleGuard } from "./RoleGuard.jsx"
import { ProtectedRoute } from "./ProtectedRoutes.jsx"
import { UnauthorizedPage } from "../../features/auth/pages/UnauthorizedPage.jsx"


export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<AuthPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            {/* Rutas protegidas */}
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <RoleGuard allowedRoles={["ADMIN_ROLE"]}>
                        <DashboardPage />
                    </RoleGuard>
                </ProtectedRoute>
            } >
                <Route path="users" element={<Users />}/>
                <Route path="fields" element={<Fields />}/>
            </Route>
        </Routes>
    )
}
