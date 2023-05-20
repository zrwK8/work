import { FC } from "react";
import Header from "../../widgets/Layout/Header";
import Footer from "../../widgets/Layout/Footer";
import AdminPanel from "../../features/profile/AdminPanel";

const Dashboard: FC = () => {
  return (
    <>
      <Header />
      <AdminPanel />
      <Footer />
    </>
  );
};

export default Dashboard;
