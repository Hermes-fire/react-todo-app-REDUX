import { FormControl } from 'react-bootstrap';
import "./index.css";

const CustomInput = ({onKeyDown,onChange,value}) => {
  
    return (
            <FormControl placeholder="Add your new Todo" className='fs-4' onKeyDown={onKeyDown} onChange = {onChange} value = {value}/>
        )
}

export default CustomInput;