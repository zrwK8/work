import { FC } from "react";
import { Navigate } from "react-router-dom";

const NotFoundPage: FC = () => {
  return <Navigate to="/" replace />;
};

export default NotFoundPage;
