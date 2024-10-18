import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("roles") || '[]');

  // Kiểm tra quyền truy cập
  const hasAccess = token && allowedRoles.some(role => roles.includes(role));

  return hasAccess ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
