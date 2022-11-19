import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import Palco from './componentes/Palcos';
import {useState} from 'react';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario cadastrarColaborador= {colaborador => {
        setColaboradores([...colaboradores, colaborador]);
      }} />
      <Palco nome={"Metal"} />
      <Palco nome={"Punk"} />
      <Palco nome={"Grunge"} />

    </div>
  );
}

export default App;
