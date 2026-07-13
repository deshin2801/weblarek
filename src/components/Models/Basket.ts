import {IProduct} from "../../types";

class Basket {
  private savedProducts: IProduct[] = [];

  getSavedProducts(): IProduct[]{
   return[...this.savedProducts];
  }

  addSavedProducts(IProduct: IProduct): void {
    this.savedProducts.push(IProduct);
  }

  deleteSavedProducts(IProduct: IProduct): void {
    this.savedProducts = this.savedProducts.filter(savedProduct => savedProduct.id !== IProduct.id)
  }

  clearBasket(): void {
    this.savedProducts = [];
}

getSavedProductsPrice(): number{
  return this.savedProducts.reduce((total, savedProducts) => total + (savedProducts.price ?? 0), 0);
}

getSavedProductsLenght(): number {
  return this.savedProducts.length;
}

hasSavedProduct (id: string): boolean {
  return this.savedProducts.some(savedProducts => savedProducts.id === id);
}

}

export default Basket