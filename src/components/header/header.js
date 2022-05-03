import { Container, Hr, CartCount } from './styles';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import { useCart } from '../../Providers/cart';

export default function Header() {

    const history = useHistory()
    const { cart } = useCart()    

    return (
        <>
            <Container>
                <h1 onClick={() => history.push('/dashboard')}>Kenzie Shop</h1>
                <div>
                    <button onClick={() => history.push('/cart')}>
                        <AiOutlineShoppingCart size={22} />
                        <span>Carinho</span>
                    </button>
                    <button onClick={() => history.push('/')}> <MdLogin size={22} /> Entrar</button>
                </div>
                
                { cart.length > 0 && <CartCount>{cart.length}</CartCount>}
            </Container>
            <Hr />
        </>
    )
}
