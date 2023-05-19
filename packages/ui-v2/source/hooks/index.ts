import { useContext } from "react";
import { AppStoreContext } from "../store";
export * from './hook-message'

const useAppStore = () => useContext(AppStoreContext);

export {
  useAppStore
}