import { FC } from "react";
import Footer from "../../widgets/Layout/Footer";
import UserProfile from "../../components/profile/UserProfile";
import Header from "../../widgets/Layout/Header";

const Profile: FC = () => {
  return (
    <div>
      <Header />
      <UserProfile />
      <Footer />
    </div>
  );
};

export default Profile;
