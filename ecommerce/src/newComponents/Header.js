import '../App.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
        <div className='flex shopping-card'>
          
            <div onClick={() => props.handleShow(false)} style={{color:"white"}}>
                <h2>Shopping Cart App</h2></div>
            <div onClick={() => props.handleShow(true)} style={{color:"white", marginTop:"15px"}}> <b>Cart</b>
                <sup> {props.count} </sup>
            </div>
        </div>
        </>
    );
}

export default Header;