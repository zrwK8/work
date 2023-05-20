import { FC } from "react";
import Footer from "../../widgets/Layout/Footer";
import Logo from "../../widgets/Logo";
import RegisterForm from "../../features/auth/Register";

const Register: FC = () => {
  return (
    <div>
      <Logo />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
