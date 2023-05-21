import { FC } from "react";
import Header from "../../widgets/Layout/Header";
import Footer from "../../widgets/Layout/Footer";
import Info from "../../features/profile/Dashboard/Information";

const Information: FC = () => {
  return (
    <>
      <Header />
      <Info />
      <Footer />
    </>
  );
};

export default Information;
