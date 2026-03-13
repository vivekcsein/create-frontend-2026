"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type MenuState = Record<string, boolean>;

interface HamburgerMenuContextType {
  isOpen: (key: string) => boolean;
  toggle: (key: string) => void;
  open: (key: string) => void;
  close: (key: string) => void;
  closeAll: () => void;
}

const HamburgerMenuContext = createContext<HamburgerMenuContextType | undefined>(undefined);

export function HamburgerMenuProvider({ children }: { children: ReactNode }) {
  const [menus, setMenus] = useState<MenuState>({});

  const isOpen = useCallback((key: string) => menus[key] ?? false, [menus]);

  const toggle = useCallback((key: string) => {
    setMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const open = useCallback((key: string) => {
    setMenus((prev) => ({
      ...prev,
      [key]: true,
    }));
  }, []);

  const close = useCallback((key: string) => {
    setMenus((prev) => ({
      ...prev,
      [key]: false,
    }));
  }, []);

  const closeAll = useCallback(() => {
    setMenus({});
  }, []);

  return (
    <HamburgerMenuContext.Provider value={{ isOpen, toggle, open, close, closeAll }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
}

export function useHamburgerMenu(key: string) {
  const context = useContext(HamburgerMenuContext);

  if (!context) {
    throw new Error("useHamburgerMenu must be used within HamburgerMenuProvider");
  }

  return {
    isOpen: context.isOpen(key),
    toggleMenu: () => context.toggle(key),
    openMenu: () => context.open(key),
    closeMenu: () => context.close(key),
    closeAllMenus: context.closeAll,
  };
}
