import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  Auth,
  Details,
  Home,
  Login,
  NotFound,
  // ProfileCard,
  ProfileCardWidget,
  SellPage,
  SignUp,
} from "./pages";
import { BottomNav, Footer, Navbar, ScrollTop } from "./components";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    mobile: "700px",
    mm: "500px",
    sm: "380px",
    xs: "350",
    sh: "660px",
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/auth/reset" element={<Auth />} />
            <Route path="/sell-your-car" element={<SellPage />} />
            <Route path="/listing/:id" element={<Details />} />
            <Route path="/user/:username" element={<ProfileCardWidget />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
          <ScrollTop />
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
