/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound404 from "./pages/NotFound404";

const App = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </ThemeUIProvider>
  );
};

export default App;
