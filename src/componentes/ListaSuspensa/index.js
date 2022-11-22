import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
   return(
      <div>
         <label className='label'>{props.label}</label>
         <select onChange= {e =>props.aoAlterado(e.target.value)} className='select' required={props.obrigatorio} value={props.valor}>
            <option key=""> </option>
            {props.nomesPalcos.map(nomePalco => {
               return <option key={nomePalco}>{nomePalco}</option>
            })}
         </select>
      </div>
   );
};


export default ListaSuspensa;