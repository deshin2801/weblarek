import './scss/styles.scss';

import ProductCatalog from './components/Models/ProductCatalog';
import Basket from './components/Models/Basket';
import Customer from './components/Models/Costumer';
import { apiProducts } from './utils/data';

const productsModel = new ProductCatalog();
productsModel.saveProducts(apiProducts.items); 

console.log('Массив товаров из каталога:', productsModel.getProducts());