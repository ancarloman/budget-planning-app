import { createContext, useContext } from "react";

export interface NavItem {
  name: string;
  to?: string;
}

export const NavItemsContext = createContext<NavItem[] | null>(null);

export const useNavItems = () => {
  const context = useContext(NavItemsContext);
  if (!context) {
    throw new Error("useNavItems must be used inside a NavItemsProvider");
  }
  return context;
};