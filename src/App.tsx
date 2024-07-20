import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { PATH } from "./constants";
import { theme } from "./styled/theme";

import { NotFound, Dashboard } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<Dashboard />} />
          <Route path={PATH.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
