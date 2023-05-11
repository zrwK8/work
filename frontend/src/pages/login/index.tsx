import { FC } from "react";
import Footer from "../../widgets/Layout/Footer";
import LoginForm from "../../components/auth/Login";
import Logo from "../../widgets/Logo";

const Login: FC = () => {
  return (
    <div>
      <Logo />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
