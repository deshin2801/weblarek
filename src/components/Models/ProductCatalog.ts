import {IProduct} from "../../types";

class ProductCatalog {
  private products: IProduct[] = [];
  private selectProduct: IProduct | null = null

  saveProducts(productsArray: IProduct[]): void{
    this.products = [...productsArray];
  }

  getProducts(): IProduct[] {
    return [...this.products];
  }

  getProductId(id: string): IProduct | undefined {
    return this.products.find(IProduct => IProduct.id === id);
  }

  setSelectedProduct (IProduct: IProduct): void {
    this.selectProduct = IProduct;
  }

  getSelectedProduct (): IProduct | null {
    return this.selectProduct
  }
}

export default ProductCatalog