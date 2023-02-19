import { useContext } from "react";
import { AppStoreContext } from "../store";

const useAppStore = () => useContext(AppStoreContext);

export {
  useAppStore
}