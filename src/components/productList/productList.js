import { Container, Price } from './styles';
import { useCatalogue } from '../../Providers/catalogue';
import { useCart } from '../../Providers/cart';

export default function ProductList() {

    const { catalogue } = useCatalogue()
    const { addToCart } = useCart()


    return (
        <Container>
            <ul>
                {catalogue.map((product, index) => {
                    return (
                        <li key={product.id}>
                            <img src={product.image} alt='Relógio' />
                            <h4>{product.name}</h4>
                            <Price>{product.priceFormatted}</Price>
                            <button
                                id={product.id}
                                type='button'
                                onClick={() => addToCart(product)}
                                >Adicionar ao carrinho</button>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}
