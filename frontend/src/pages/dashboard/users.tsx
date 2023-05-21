import { FC } from "react";
import Header from "../../widgets/Layout/Header";
import Footer from "../../widgets/Layout/Footer";
import UsersList from "../../features/profile/Dashboard/UsersList";

const Users: FC = () => {
  return (
    <>
      <Header />
      <UsersList />
      <Footer />
    </>
  );
};

export default Users;
