import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
   return(
      <div>
         <label className='label'>{props.label}</label>
         <select className='select' required={props.obrigatorio}>
            {props.itens.map(item => {
               return <option key={item}>{item}</option>
            })}
         </select>
      </div>
   );
};


export default ListaSuspensa;