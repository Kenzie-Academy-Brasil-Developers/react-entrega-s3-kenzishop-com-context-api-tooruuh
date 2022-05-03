import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {

    const list = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []
    const [cart, setCart] = useState(list);


    const addToCart = (product) => {

        const list = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []

        if (list.length === 0) {

            const newList = [...list, product]
            localStorage.setItem('@KenzieShop:cart', JSON.stringify(newList))

            setCart([...cart, product]);

        } else {
            const validacao = list.find((item) => {
                return item.id === product.id
            })

            if (validacao === undefined) {
                const newList = [...list, product]
                localStorage.setItem('@KenzieShop:cart', JSON.stringify(newList))

                setCart([...cart, product]);
            }
        }
    };


    const removeFromCart = (item) => {

        const list = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []
        const newCart = list.filter((itemOnCart) => itemOnCart.name !== item.name);
        localStorage.setItem('@KenzieShop:cart', JSON.stringify(newCart))

        setCart(newCart)
    }

    const cleanFromCart = () => {

        const clean = []
        localStorage.setItem('@KenzieShop:cart', JSON.stringify(clean))

        setCart([])
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, cleanFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)