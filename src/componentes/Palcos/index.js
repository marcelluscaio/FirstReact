import './palcos.css';
import Colaborador from '../Colaborador';

const Palco = (props) => {
   return(
      
      <section className='palco' style={{backgroundColor: props.cor2}}>
         <h3 className='palco__titulo' style={{borderColor: props.cor1}}>{props.nome}</h3>
         {/* <Colaborador /> */}
         <div className='palco__colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} palco={colaborador.palco} />)}
         </div>

      </section>
   )
}

export default Palco;