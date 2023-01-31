import { useContext } from "react";
import GlobalContext from "./crt_cntxt";

const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;
