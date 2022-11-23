import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Router } from "./Router";
import { CyclesContextProvider } from "./contexts/CycleContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
