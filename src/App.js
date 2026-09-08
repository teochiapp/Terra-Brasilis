import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import Inicio from './pages/inicio/Inicio';
import Historia from './pages/historia/Historia';
import Finca from './pages/finca/Finca';
import Profesionales from './pages/profesionales/Profesionales';
import Contacto from './pages/contacto/Contacto';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/finca" element={<Finca />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
