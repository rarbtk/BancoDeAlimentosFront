import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContainer from "../containers/LoginContainer";
import DashboardContainer from "../containers/DashboardContainer";
import DonorsContainer from "../containers/DonorsContainer";
import DonationsContainer from "../containers/DonationsContainer";
import CampaignsContainer from "../containers/CampaignsContainers";
import StockContainer from "../containers/StockContainer";
import OrganizationsContainer from "../containers/OrganizationsContainer";
import DeliveriesContainer from "../containers/DeliveriesContainer";
import HomeContainer from "../containers/HomeContainer";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/Login" element={<LoginContainer />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
        <Route path="/donors" element={<DonorsContainer />} />
        <Route path="/donations" element={<DonationsContainer />} />
        <Route path="/Organizations" element={<OrganizationsContainer />} />
        <Route path="/deliveries" element={<DeliveriesContainer />} />
        <Route path="/campaigns" element={<CampaignsContainer />} />
        <Route path="/stock" element={<StockContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;