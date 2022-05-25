import { Routes, Route, BrowserRouter  } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>

        <Routes>

            {/* <Route path="/login" element={<LoginScreen />} /> */}
            <Route path="/login" element={
              <PublicRoute>
                <LoginScreen/>
              </PublicRoute>
            }
            />

            <Route path="/*" element={ 
            
                <PrivateRoute>
                  <DashboardRoutes/>
                </PrivateRoute>
  
            	}           
            />
            {/* <Route path="/*" element={<DashboardRoutes/>}  />  */}
        </Routes>
    </BrowserRouter>
  )
}
