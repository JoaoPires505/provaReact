import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import CaracteristicasScreen from "../screens/CaracteristicasScreen";
import ContatoScreen from "../screens/ContatoScreen";
import FocaScreen from "../screens/FocaScreen";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import UrsoScreen from "../screens/UrsoScreen";

export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ContatoScreen />} path="/contato" />
                    <Route element={<SobreScreen />} path="/sobre" />
                    <Route element={<FocaScreen />} path="/focas" />
                    <Route element={<UrsoScreen />} path="/ursos" />
                    <Route element={<CaracteristicasScreen />} path="/caracteristicas" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

