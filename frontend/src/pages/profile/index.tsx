import { FC } from "react";
import Footer from "../../widgets/Layout/Footer";
import Header from "../../widgets/Layout/Header";
import UserProfile from "../../features/profile/UserProfile";

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
