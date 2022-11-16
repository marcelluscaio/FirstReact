import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

const Formulario = () => {
   const palcos = [
      '',
      'Metal',
      'Punk',
      'Grunge',      
      'Desistimos de classificar'
   ];
   
   return(
      <section className='formulario'>
         <form>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
            <ListaSuspensa label="Palcos" itens={palcos}/>
         </form>
      </section>
   )
};

export default Formulario;