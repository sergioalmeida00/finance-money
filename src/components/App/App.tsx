import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { GlobalStyle } from "../../styles/global";
import { Transactions } from "../../pages/Transactions";
import { AppContainer } from "./styles";
import { Login } from "../../pages/Login";
import { AuthProvider } from "../../hooks/auth";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
       {/* <Transactions/> */}
       <AuthProvider>
          <Login/>
       </AuthProvider>

    </ThemeProvider>
  )
}

