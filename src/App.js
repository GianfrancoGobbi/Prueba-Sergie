import './App.css';
import Nav from './Components/Nav/Nav';
import Tabla from './Components/Tabla/Tabla';
import Form from './Components/Form/Form';
import { Route, Routes } from 'react-router-dom';

// ¡Muchas gracias por postularte!
// Este es el mini-desafío:
// Crea una app web react simple donde haya un header con 2 rutas. Cada ruta llevará a una screen diferente 1) En la primera screen/ruta: armar una tabla (puede ser con Bootstrap) con los siguientes datos:

// 2) Y en la otra screen/ruta armar un formulario de 2 o 3 campos (usando hooks para manipular los datos/estado) donde al tocar el botón submit tome los datos ingresados y los ponga debajo o en un console.log
// Subirlo a repositorio público GitHub y pasarnos el link para poder ver el código y ejecutar la app.


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Nav />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tabla" element={<Tabla />} />
      </Routes>
    </div >
  );
}

export default App;
