import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "./firebaseInit";
import Authenticate from "./components/auth-login/Authenticate";
import DbToStore from "./components/auth-login/DbToStore";
import ColorTheme from "./components/user-settings/ColorTheme";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Authenticate>
              <DbToStore>
                <ColorTheme>
                  <Landing />
                </ColorTheme>
              </DbToStore>
            </Authenticate>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
