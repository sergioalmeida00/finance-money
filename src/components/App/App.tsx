import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { GlobalStyle } from "../../styles/global";
import { AuthProvider } from "../../hooks/auth";
import { Routes } from "../../routes";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
       <AuthProvider>
          <Routes/>
       </AuthProvider>
    </ThemeProvider>
  )
}

