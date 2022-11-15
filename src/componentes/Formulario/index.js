import CampoTexto from '../CampoTexto';
import './formulario.css';

const Formulario = () => {
   return(
      <section className='formulario'>
         <form>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
         </form>
      </section>
   )
};

export default Formulario;