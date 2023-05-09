import { FC } from "react";
import Header from "../../widgets/Layout/Header";
import SliderProfession from "../../widgets/Slider";
import EmployeeCardList from "../../widgets/EmployeeCardList";
import UploadCV from "../../widgets/UploadCV";
import NewsSubscribe from "../../widgets/NewsSubscribe";
import Footer from "../../widgets/Layout/Footer";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <SliderProfession />
      <UploadCV />
      <EmployeeCardList />
      <NewsSubscribe />
      <Footer />
    </div>
  );
};

export default Home;
