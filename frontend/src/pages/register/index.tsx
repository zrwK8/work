import { FC } from "react";
import Footer from "../../widgets/Layout/Footer";
import Logo from "../../widgets/Logo";
import RegisterForm from "../../components/auth/Register";

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
