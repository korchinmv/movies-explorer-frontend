import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element: Component, ...props }) => {
  props.loggedIn ? <Component {...props} /> : <Navigate to='/signup' replace />;
};

export default ProtectedRoute;
