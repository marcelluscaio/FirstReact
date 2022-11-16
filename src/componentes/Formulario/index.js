import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './formulario.css';

const Formulario = () => {
   const palcos = [
      '',
      'Metal',
      'Punk',
      'Grunge',      
      'Desistimos de classificar'
   ];

   const aoSalvar = (e) => {
      e.preventDefault();
      console.log("Form submetido")
   }
   
   return(
      <section className='formulario'>
         <form onSubmit={aoSalvar}>
            <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true} />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true} />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
            <ListaSuspensa label="Palcos" itens={palcos} obrigatorio={true}/>
            <Botao texto="Criar Card"/>
         </form>
      </section>
   )
};

export default Formulario;