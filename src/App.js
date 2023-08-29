import "./App.css";
import React, {useEffect, useState, useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ProtectedRoute from './ProtectedRoute'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup"
import Movie from "./pages/Movie"
import ForgotPassword from "./pages/ForgotPassword";
import { auth } from './firebase'
// import ProtectedRoute from "./components/protected/ProtectedRoute";
import SingleMovie from "./pages/SingleMovie";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/scroll/ScrollToTop";
import AuthContext from "./context/AuthContext"
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }

    return children
  };

  const [userLogin, setUserLogin] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserLogin(user.displayName);
      }else{
        setUserLogin("")
      }
    })
  },[])
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header isLogin={userLogin} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/movie" element={
        <ProtectedRoute>
        <Movie />
      </ProtectedRoute>
      } />
        <Route exact path="/movie/:id" element={<SingleMovie />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
