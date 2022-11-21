import './palcos.css';
import Colaborador from '../Colaborador';

const Palco = (props) => {
   return(
      <section className='palco' style={{backgroundColor: props.cor2}}>
         <h3 className='palco__titulo' style={{borderColor: props.cor1}}>{props.nome}</h3>
         <Colaborador />

      </section>
   )
}

export default Palco;