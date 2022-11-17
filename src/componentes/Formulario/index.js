import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './formulario.css';
import {useState} from 'react';

const Formulario = () => {
   const palcos = [
      '',
      'Metal',
      'Punk',
      'Grunge',      
      'Desistimos de classificar'
   ];

   const [nome, setNome] = useState('');
   const [cargo, setCargo] = useState('');
   const [imagem, setImagem] = useState('');

   const aoSalvar = (e) => {
      e.preventDefault();
      console.log("Form submetido")
   }
   
   return(
      <section className='formulario'>
         <form onSubmit={aoSalvar}>
            <CampoTexto 
               label="Nome" 
               placeholder="Digite seu nome" 
               obrigatorio={true}
               valor={nome}
               aoAlterado= {valor => setNome(valor)}  
            />
            <CampoTexto 
               label="Cargo" 
               placeholder="Digite seu cargo" 
               obrigatorio={true}
               valor={cargo}
               aoAlterado= {valor => setCargo(valor)}  

            />
            <CampoTexto 
               label="Imagem" 
               placeholder="Digite o endereço da sua imagem"
               valor={imagem}
               aoAlterado= {valor => setImagem(valor)}   
            />
            <ListaSuspensa label="Palcos" itens={palcos} obrigatorio={true}/>
            <Botao texto="Criar Card"/>
         </form>
      </section>
   )
};

export default Formulario;