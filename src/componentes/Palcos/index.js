import './palcos.css';

const Palco = (props) => {
   return(
      <section className='palco'>
         <h3 className='palco__titulo'>{props.nome}</h3>
      </section>
   )
}

export default Palco;