import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();

    const getToken = (): string | null => {
        return Cookies.get("token") ?? null;
    };

    const getRole = (): string | null => {
        return Cookies.get("role") ?? null;
    };

    const isAuthenticated = (): boolean => {
        return Boolean(getToken());
    };

    const logout = (): void => {
        Cookies.remove("token");
        Cookies.remove("role");
        navigate("/login");
    };

    return {
        getToken,
        getRole,
        isAuthenticated,
        logout,
    };
};
