import { useContext } from "react";
import { AuthContext } from "../provider/auth-provider";

const useAuth = () => useContext(AuthContext);

export default useAuth;
