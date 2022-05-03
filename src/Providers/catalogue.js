import { createContext, useContext, useState } from "react";
import { formatValue } from "../utils/formatValue";

import watch1 from '../assets/w1.webp'
import watch2 from '../assets/w2.webp'
import watch3 from '../assets/w3.webp'
import watch4 from '../assets/black.webp'
import watch5 from '../assets/blue.webp'
import watch6 from '../assets/green.webp'

const defaultState = [
    { id: 1, name: "Classic DATEJUST 36 Oyster, 36 mm, Oystersteel",                               price: 54799, image: watch1 },
    { id: 2, name: "Classic DAY-DATE 36 New Model 2022 Oyster, 36 mm, platinum and diamonds",      price: 62559, image: watch2 },
    { id: 3, name: "Classic DAY-DATE 36 New Model 2022 Oyster, 36 mm, Everose gold and diamonds",  price: 60599, image: watch3 },
    { id: 4, name: "Relógio SUBMARINER Black, 41 mm, aço Oystersteel",                             price: 67599, image: watch4 },
    { id: 5, name: "Relógio SUBMARINER Blue, 41 mm, aço Oystersteel",                              price: 74399, image: watch5 },
    { id: 6, name: "Relógio SUBMARINER Green, 41 mm, aço Oystersteel",                             price: 80299, image: watch6 },
]

const data = defaultState.map(product => ({
    ...product,
    priceFormatted: formatValue(product.price),
}));


export const CatalogueContext = createContext([])

export const CatalogueProvider = ({ children }) => {
    const [catalogue] = useState(data);

    return (
        <CatalogueContext.Provider
            value={{ catalogue }}>
            {children}
        </CatalogueContext.Provider>
    )
}

export const useCatalogue = () => useContext(CatalogueContext)