import { Button } from 'react-bootstrap';
import "./index.css";



const CustomButton = ({style,children,...rest}) => {

    return (
        <>
            <Button style={style} {...rest}>{children}</Button>{' '}
        </>
    )
}
export default CustomButton;