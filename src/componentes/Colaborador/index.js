import './colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({nome, imagem, cargo, cor, aoDeletar}) => {
   return(
      <div className='colaborador'>
         <div className='cabecalho' style={{backgroundColor: cor}}>
            <img src={imagem} alt={nome}/>
         </div>
         <div className='rodape'>
            <h4 style={{color: cor}}>{nome}</h4>
            <h5 style={{color: cor}}>{cargo}</h5>
            <AiFillCloseCircle onClick={() => aoDeletar(nome)} />
         </div>
      </div>
   
   );
};

export default Colaborador;