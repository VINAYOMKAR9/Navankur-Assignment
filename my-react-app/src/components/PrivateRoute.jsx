import useAuth from '../context/Auth'

const PrivateRoute = ({ children }) => {
    const { token } = useAuth();
    return token ? children : <Navigate to="/login" />;
  };

  export default PrivateRoute