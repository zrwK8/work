import { FC } from "react";
import Footer from "../../widgets/Layout/Footer";
import Logo from "../../widgets/Logo";
import LoginForm from "../../features/auth/Login";

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
