import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import {useState} from 'react';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario cadastrarColaborador= {colaborador => {
        setColaboradores([...colaboradores, colaborador]);
      }} />
    </div>
  );
}

export default App;
