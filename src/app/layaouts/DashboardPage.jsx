import { DashboardContainer } from "../../shared/components/layaout/DashboardContainer.jsx"
import { Outlet } from "react-router-dom"

export const DashboardPage = () => {
  return (
    <DashboardContainer>
        <Outlet/>
    </DashboardContainer>
  )
}
