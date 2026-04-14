import { Routes, Route } from "react-router-dom"
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx"
import { DashboardPage } from "../layaouts/DashboardPage.jsx"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
    )
}
