import { type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      storageKey="vite-ui-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
