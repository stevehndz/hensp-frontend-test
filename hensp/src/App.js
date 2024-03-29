import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    /*<div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full  w-1/2 items-center justify-center bg-gray-200">
        <div className="w-full h-full bg-gradient-to-tr from-violet-500 to-pink-500"></div>
      </div>
    </div>*/

    <div className="bg-gradient-to-tr from-indigo-500 to-emerald-500 flex w-full h-screen justify-center">
      <div className=" w-full flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                localStorage.getItem('token') ? (
                  <Home />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/home" Component={Home}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
