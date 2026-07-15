import './scss/styles.scss';

import ProductCatalog from './components/Models/ProductCatalog';
import Basket from './components/Models/Basket';
import Customer from './components/Models/Customer';
import { apiProducts } from './utils/data';
import { Api } from './components/base/Api';
import Server from './components/Models/Server';

const productsModel = new ProductCatalog();
productsModel.saveProducts(apiProducts.items); 

console.log('Массив товаров из каталога:', productsModel.getProducts());

console.log('получение товара по его id:',
productsModel.getProductId("854cef69-976d-4c2a-a18c-2aa45046c390"));

productsModel.setSelectedProduct('+1 час в сутках');
console.log('получение товара для подробного отображения', productsModel.getSelectedProduct())

const customer = new Customer();

customer.savePayment('card');
customer.saveAddress('г.Москва, ул. Льва Толстого, 16');
customer.saveEmail('practicum@support.yandex.ru');
customer.savePhone('+7 495 739-70-70');

console.log('получение всех данных покупателя:', customer.getCustomerData());
console.log('очистка данных покупателя', customer.clearCustomerData());
console.log('валидация', customer.validateData());

const basket = new Basket();

basket.addSavedProducts(
{"id": "854cef69-976d-4c2a-a18c-2aa45046c390", "description": "Если планируете решать задачи в тренажёре, берите два.", "image": "/5_Dots.svg", "title": "+1 час в сутках", "category": "софт-скил", "price": 750});
console.log('Добавление товара, который был получен в параметре, в массив корзины', basket.getSavedProducts());

basket.deleteSavedProducts({"id": "854cef69-976d-4c2a-a18c-2aa45046c390", "description": "Если планируете решать задачи в тренажёре, берите два.", "image": "/5_Dots.svg", "title": "+1 час в сутках", "category": "софт-скил", "price": 750});
console.log('Удаление товара, полученного в параметре из массива корзины', basket.getSavedProducts());

basket.clearBasket();

console.log('Очистка корзины', basket.getSavedProducts());

console.log('Получение стоимости всех товаров в корзине', basket.getSavedProductsPrice());

console.log('Получение количества товаров в корзине', basket.getSavedProductsLenght());

console.log('Проверка наличия товара в корзине по его id, полученного в параметр метода', basket.hasSavedProduct("b06cde61-912f-4663-9751-09956c0eed67"));

const server = new Server(Api);

server.getProducts()
.then((responseData) => {
  const products = responseData.products;
  const catalog = new ProductCatalog;

  catalog.saveProducts(products);
  console.log('сохранили каталог:', catalog.getProducts())
})
.catch((error) => {
  console.error('ошибка получения товаров:', error )
});



 