
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Menu Navegacion/inicio';

import GafasSinRegistrar from './components/Gafas/gafas';
import GafasAdmin from './components/Gafas/gafas Admin';
import GafasRegistrado from './components/Gafas/gafas Registrado';
import AnadirSinRegistar from './components/Anadir/anadir';
import AnadirAdmin from './components/Anadir/anadir Admin';
import AnadirRegistrado from './components/Anadir/anadir Registrado';
import BanadoresSinRegistrar from './components/Bañadores/bañadores';
import BanadoresAdmin from './components/Bañadores/bañadores Admin';
import BanadoresRegistrado from './components/Bañadores/bañadores Registrado';
import Cabecera from './components/Cabecera/cabecera';
import CalcetinesSinRegistrar from './components/Calcetines/calcetines ';
import CalcetinesAdmin from './components/Calcetines/calcetines Admin';
import CalcetinesRegistrado from './components/Calcetines/calcetines Registrado';
import CamisasSinRegistrar from './components/Camisas/camisas';
import CamisasAdmin from './components/Camisas/camisas Admin';
import CamisasRegistrado from './components/Camisas/camisas Registrado';
import CamisetasSinRegistrar from './components/Camisetas/camisetas';
import CamisetasAdmin from './components/Camisetas/camisetas Admin';
import CamisetasRegistrado from './components/Camisetas/camisetas Registrado';
import Cesta from './components/Cesta de la compra/Cesta';
import ChaquetasSinRegistrar from './components/Chaquetas/chaquetas ';
import ChaquetasAdmin from './components/Chaquetas/chaquetas Admin';
import ChaquetasRegistrado from './components/Chaquetas/chaquetas Registrado';
import CorbatasSinRegistrar from './components/Corbatas/corbatas';
import CorbatasAdmin from './components/Corbatas/corbatas Admin';
import CorbatasRegistrado from './components/Corbatas/corbatas Registrado';
import Error from './components/Error/error';
import Login from "./components/Login/login";
import PantalonesSinRegistrar from './components/Pantalones/pantalones';
import PantalonesAdmin from './components/Pantalones/pantalones Admin';
import PantalonesRegistrado from './components/Pantalones/pantalones Registrado';
import Registro from './components/Registro/registro';
import RutaPrivadaGafasAdmin from './components/Ruta privada Admin/Ruta privada Gafas Admin/RutaPrivadaGafasAdmin';
import RutaPrivadaAnadirAdmin from './components/Ruta privada Admin/Ruta privada Anadir Admin/RutaPrivadaAnadirAdmin';
import RutaPrivadaBanadoresAdmin from './components/Ruta privada Admin/Ruta privada Bañadores Admin/RutaPrivadaBañadoresAdmin';
import RutaPrivadaCalcetinesAdmin from './components/Ruta privada Admin/Ruta privada Calcetines Admin/RutaPrivadaCalcetines Admin';
import RutaPrivadaCamisasAdmin from './components/Ruta privada Admin/Ruta privada Camisas Admin/RutaPrivadaCamisasAdmin';
import RutaPrivadaCamisetasAdmin from './components/Ruta privada Admin/Ruta privada Camisetas Admin/RutaPrivadaCamisetasAdmin';
import RutaPrivadaChaquetasAdmin from './components/Ruta privada Admin/Ruta privada Chaquetas Admin/RutaPrivadaChaquetasAdmin';
import RutaPrivadaCorbatasAdmin from './components/Ruta privada Admin/Ruta privada Corbatas Admin/RutaPrivadaCorbatasAdmin';
import RutaPrivadaPantalonesAdmin from './components/Ruta privada Admin/Ruta privada Pantalones Admin/RutaPrivadaPantalonesAdmin';
import RutaPrivadaGafas from './components/Ruta privada/Ruta privada Gafas/RutaPrivadaGafas';
import RutaPrivadaAnadir from './components/Ruta privada/Ruta privada Anadir/RutaPrivadaAnadir';
import RutaPrivadaBanadores from './components/Ruta privada/Ruta privada Bañadores/RutaPrivadaBañadores';
import RutaPrivadaCalcetines from './components/Ruta privada/Ruta privada Calcetines/RutaPrivadaCalcetines';
import RutaPrivadaCamisas from './components/Ruta privada/Ruta privada Camisas/RutaPrivadaCamisas';
import RutaPrivadaCamisetas from './components/Ruta privada/Ruta privada Camisetas/RutaPrivadaCamisetas';
import RutaPrivadaCesta from './components/Ruta privada/Ruta privada Cesta/RutaPrivadaCesta';
import RutaPrivadaChaquetas from './components/Ruta privada/Ruta privada Chaquetas/RutaPrivadaChaquetas';
import RutaPrivadaCorbatas from './components/Ruta privada/Ruta privada Corbatas/RutaPrivadaCorbatas';
import RutaPrivadaLogin from './components/Ruta privada/Ruta Privada Login/RutaPrivadaLogin';
import RutaPrivadaPantalones from './components/Ruta privada/Ruta privada Pantalones/RutaPrivadaPantalones';
import RutaPrivadaRegistro from './components/Ruta privada/Ruta Privada Registro/RutaPrivadaRegistro';
import Pagar from "./components/Pago/pago";
import Perfil from "./components/Perfil/perfil";
import EditarPerfil from "./components/EditarPerfil/editarPerfil";
import { AuthProvider } from './contextos/AuthContext';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Cabecera />

        <Routes>

          <Route path='/pantalones' element={
            <RutaPrivadaPantalones>
              <PantalonesRegistrado />
            </RutaPrivadaPantalones>
          } />
          <Route path='/pantalonesAdmin' element={
            <RutaPrivadaPantalonesAdmin>
              <PantalonesAdmin />
            </RutaPrivadaPantalonesAdmin>
          } />
          <Route path='/pantalonesM' element={<PantalonesSinRegistrar />} />

          <Route path='/camisetas' element={
            <RutaPrivadaCamisetas>
              <CamisetasRegistrado />
            </RutaPrivadaCamisetas>
          } />
          <Route path='/camisetasAdmin' element={
            <RutaPrivadaCamisetasAdmin>
              <CamisetasAdmin />
            </RutaPrivadaCamisetasAdmin>
          } />
          <Route path='/camisetasM' element={<CamisetasSinRegistrar />} />

          <Route path='/anadir' element={
            <RutaPrivadaAnadir>
              <AnadirRegistrado />
            </RutaPrivadaAnadir>
          } />
          <Route path='/anadirAdmin' element={
            <RutaPrivadaAnadirAdmin>
              <AnadirAdmin />
            </RutaPrivadaAnadirAdmin>
          } />
          <Route path='/anadirM' element={<AnadirSinRegistar />} />

          <Route path='/chaquetas' element={
            <RutaPrivadaChaquetas>
              <ChaquetasRegistrado />
            </RutaPrivadaChaquetas>
          } />
          <Route path='/chaquetasAdmin' element={
            <RutaPrivadaChaquetasAdmin>
              <ChaquetasAdmin />
            </RutaPrivadaChaquetasAdmin>
          } />
          <Route path='/chaquetasM' element={<ChaquetasSinRegistrar />} />

          <Route path='/calcetines' element={
            <RutaPrivadaCalcetines>
              <CalcetinesRegistrado />
            </RutaPrivadaCalcetines>
          } />
          <Route path='/calcetinesAdmin' element={
            <RutaPrivadaCalcetinesAdmin>
              <CalcetinesAdmin />
            </RutaPrivadaCalcetinesAdmin>
          } />
          <Route path='/calcetinesM' element={<CalcetinesSinRegistrar />} />

          <Route path='/camisas' element={
            <RutaPrivadaCamisas>
              <CamisasRegistrado />
            </RutaPrivadaCamisas>
          } />
          <Route path='/camisasAdmin' element={
            <RutaPrivadaCamisasAdmin>
              <CamisasAdmin />
            </RutaPrivadaCamisasAdmin>
          } />
          <Route path='/camisasM' element={<CamisasSinRegistrar />} />

          <Route path='/corbatas' element={
            <RutaPrivadaCorbatas>
              <CorbatasRegistrado />
            </RutaPrivadaCorbatas>
          } />
          <Route path='/corbatasAdmin' element={
            <RutaPrivadaCorbatasAdmin>
              <CorbatasAdmin />
            </RutaPrivadaCorbatasAdmin>
          } />
          <Route path='/corbatasM' element={<CorbatasSinRegistrar />} />

          <Route path='/banadores' element={
            <RutaPrivadaBanadores>
              <BanadoresRegistrado />
            </RutaPrivadaBanadores>
          } />
          <Route path='/banadoresAdmin' element={
            <RutaPrivadaBanadoresAdmin>
              <BanadoresAdmin />
            </RutaPrivadaBanadoresAdmin>
          } />
          <Route path='/banadoresM' element={<BanadoresSinRegistrar />} />

          <Route path='/gafas' element={
            <RutaPrivadaGafas>
              <GafasRegistrado />
            </RutaPrivadaGafas>
          } />
          <Route path='/gafasAdmin' element={
            <RutaPrivadaGafasAdmin>
              <GafasAdmin />
            </RutaPrivadaGafasAdmin>
          } />
          <Route path='/gafasM' element={<GafasSinRegistrar />} />

          <Route path='/cesta' element={
            <RutaPrivadaCesta>
              <Cesta />
            </RutaPrivadaCesta>
          } />

          <Route path='/login' element={
            <RutaPrivadaLogin>
              <Login />
            </RutaPrivadaLogin>
          } />
          <Route path='/registro' element={
            <RutaPrivadaRegistro>
              <Registro />
            </RutaPrivadaRegistro>
          } />

          <Route path='/*' element={<Error />} />

          <Route path='/' element={<Inicio />} />
          <Route path='/pago' element={<Pagar />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path="/editarPerfil" element={<EditarPerfil/>}/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>


  );
}

export default App;
