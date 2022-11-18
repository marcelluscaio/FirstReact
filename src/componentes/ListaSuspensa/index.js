import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
   return(
      <div>
         <label className='label'>{props.label}</label>
         <select onChange= {e =>props.aoAlterado(e.target.value)} className='select' required={props.obrigatorio} value={props.value}>
            {props.itens.map(item => {
               return <option key={item}>{item}</option>
            })}
         </select>
      </div>
   );
};


export default ListaSuspensa;