import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Create from "./views/Create";
import Dashboard from "./views/Dashboard";
import Details from "./views/Details";
import Edit from "./views/Edit";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import { AuthProvider } from "./contexts/authContext";
import { SolutionsProvider } from "./contexts/solutionContext";


function App() {

  return (
    <>
    <div id="wrapper">

      <AuthProvider>
      <SolutionsProvider>
        
        <Header/>

            <main>
            
            <Routes>
                <Route path="/" element={<Home/>} />


                <Route path="/register" element={<Register/>} />

                <Route path="/login" element={<Login/>} />


                <Route path="/dashboard" element={<Dashboard/>} />

                <Route path="/create" element={<Create/>} />

                <Route path="/edit/:id" element={<Edit/>} />

                <Route path="/details/:id" element={<Details/>} />

            </Routes>

            </main>

        </SolutionsProvider>
        </AuthProvider>
    
    </div>
    
    <Footer/>
    </>
  );
}

export default App;