import { FC } from "react";
import Header from "../../widgets/Layout/Header";
import Footer from "../../widgets/Layout/Footer";
import VacanciesList from "../../features/profile/Dashboard/VacanciesList";

const Vacancies: FC = () => {
  return (
    <>
      <Header />
      <VacanciesList />
      <Footer />
    </>
  );
};

export default Vacancies;
