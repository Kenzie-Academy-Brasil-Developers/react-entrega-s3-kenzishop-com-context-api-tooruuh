import GlobalStyle from './styles/global'

import Routes from './routes/routes';
import { CatalogueProvider } from './Providers/catalogue';
import { CartProvider } from './Providers/cart'

function App() {
  return (
    <CatalogueProvider>
      <CartProvider>
        <GlobalStyle />
        <Routes />
      </CartProvider>
    </CatalogueProvider>
  );
}

export default App;
