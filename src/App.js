import logo from './logo.svg';
import './App.css';
import Layout from './templates/Layout';
import ShopByCategory from './pages/ShopByCategory/ShopByCategory';
import Detail from './pages/Detail/Detail';
import { BrowserRouter } from 'react-router-dom';
import client from './apollo-client';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    // <Provider store={store}> 
    //   <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Layout/>
          </BrowserRouter>
        </ApolloProvider>
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
