import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();

    
    const getToken = () => {
        return Cookies.get("token") || null;
    };


    const getRole = () => {
        return Cookies.get("role") || null;
    };



    const isAuthenticated = () => {
        return !!getToken();
    };

    const logout = () => {
        Cookies.remove("token");
        Cookies.remove("role");
        navigate("/");
    };

    return {
        getToken,
        getRole,
        isAuthenticated,
        logout,
    };
};
