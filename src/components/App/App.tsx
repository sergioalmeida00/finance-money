import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { GlobalStyle } from "../../styles/global";
import { AuthProvider } from "../../hooks/auth";
import { Routes } from "../../routes";
import { SideBar } from "../SideBar";
import { AppContainer, AppContent } from "./styles";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
       <AuthProvider>
        <BrowserRouter>
            <AppContainer>
              <SideBar/>
              <AppContent>
                <Routes/>
              </AppContent>          
            </AppContainer>
        </BrowserRouter>
       </AuthProvider>
    </ThemeProvider>
  )
}

