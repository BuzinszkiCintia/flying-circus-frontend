import { Signup, Login, UserContext } from "./components/Auth";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import { EnglishTest } from "./components/EnglishTest";
import Navbar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <UserContext>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<EnglishTest />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
