import {IApi} from "../../types";
import {ProductsResponse} from "../../types";
import {OrderResponse} from "../../types";
import {OrderInfo} from "../../types";

class Server {
 private api: IApi;

 constructor (api: IApi) {
  this.api = api;
 }

 async getProducts(): Promise<ProductsResponse> {
  return await this.api.get<ProductsResponse>('/product/')
 }

 async postOrder(orderInfo: OrderInfo): Promise<OrderResponse> {
   return await this.api.post('/order/', orderInfo)
 }
}

export default Server 