import './palcos.css';

const Palco = (props) => {
   return(
      <section className='palco' style={{backgroundColor: props.cor2}}>
         <h3 className='palco__titulo' style={{borderColor: props.cor1}}>{props.nome}</h3>
      </section>
   )
}

export default Palco;