import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ComponentProps {
  children: ReactNode;
}

export const LoginRedirect: FC<ComponentProps> = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const HomeRedirect: FC<ComponentProps> = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};