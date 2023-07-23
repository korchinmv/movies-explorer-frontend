import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  if (props.tokenExist) {
    if (props.isLoggedIn && (props.isSignupPage || props.isLoginPage)) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" replace />;
    }
  }
};

export default ProtectedRoute;
