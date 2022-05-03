import { useHistory } from "react-router-dom"
import { formatValue } from "../../utils/formatValue"
import { NoProductCart ,Container, Price, ResumPrice, ContentPrice, ContentButton } from "./styles"
import { BsCartX, BsEmojiFrown, BsEmojiSmile } from 'react-icons/bs'
import Header from "../../components/header/header"
import { useCart } from "../../Providers/cart"

export default function Cart() {

    const list = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []

    const { cart, removeFromCart, cleanFromCart } = useCart()

    const history = useHistory()
    
    const subtotal = formatValue(
        list.reduce((product, acc) => acc.price + product, 0).toFixed(2)
    )

    if (list.length === 0) {
        return (
            <NoProductCart>
                <h1>Seu carrinho não tem produtos ainda...</h1>
                <h1>Que tal ir as compras?</h1>
                <button onClick={() => history.push('/dashboard')}>
                    Que tal ir as compras? Vamos!
                </button>
            </NoProductCart>
        )
    }

    return (
        <>
            <Header />
            <Container>
                <ul>
                    {list.map((product, index) => {
                        return (
                            <li key={index}>
                                <img src={product.image} alt='Relógio' />

                                <span>
                                    <h4>{product.name}</h4>
                                    <Price>{product.priceFormatted}</Price>
                                </span>

                                <button
                                    id={product.id}
                                    type='button' onClick={() => removeFromCart(product)}>
                                    <BsCartX size={20} />
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <ResumPrice>
                    <ContentPrice>
                        <h3>Resumo do seu pedido</h3>
                        <h4>{cart.length} Produtos</h4>
                        <h4>Total: {subtotal}</h4>
                    </ContentPrice>

                    <hr />

                    <ContentButton>
                        <button onClick={() => history.push('/')}>Finalizar o pedido! <BsEmojiSmile size={20} /></button>
                        <button onClick={cleanFromCart}>Esvaziar o carrinho <BsEmojiFrown size={20} /></button>
                    </ContentButton>
                </ResumPrice>
            </Container>
        </>
    )
}