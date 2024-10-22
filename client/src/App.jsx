import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Service } from "./Pages/Service";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Logout } from "./Pages/Logout";
import { Error } from "./Pages/Error";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./Pages/Admin-Users";
import { AdminContacts } from "./Pages/Admin-Contacts";
// import { AdminUpdates } from "./Pages/Admin-Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/service" element={ <Service /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/logout" element={ <Logout /> } />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            {/* <Route path="update" element={<AdminUpdates/>}/> */}
          </Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;