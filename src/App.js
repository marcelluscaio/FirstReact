import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import Palco from './componentes/Palcos';
import {useState} from 'react';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const palcos = [
    {
      nome: 'Metal',
      cor1: '#57C278',
      cor2: '#D9F7E9'
    },
    {
      nome: 'Punk',
      cor1: '#82CFFA',
      cor2: '#E8F8FF'
    },
    {
      nome: 'Grunge',
      cor1: '#A6D157',
      cor2: 'F0F8E2'
    },
    {
      nome: 'Desistimos de classificar',
      cor1: '#E06B69',
      cor2: '#FDE7E8'
    },
  ];

  const deletarColaborador = (nome) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome != nome))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomesPalcos={palcos.map(palco => palco.nome)} cadastrarColaborador= {colaborador => {
        setColaboradores([...colaboradores, colaborador]);
      }} />
      {palcos.map(palco => <Palco
        key={palco.nome} 
        nome={palco.nome} 
        cor1={palco.cor1}
        cor2={palco.cor2}
        colaboradores={colaboradores.filter(colaborador => colaborador.palco === palco.nome)}
        aoDeletar={deletarColaborador}
      />)}
      {/* <Palco nome={"Metal"} />
      <Palco nome={"Punk"} />
      <Palco nome={"Grunge"} /> */}

    </div>
  );
}

export default App;
