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
    return this.products.find((product) => product.id === id);
  }

  setSelectedProduct (SelectedProduct: IProduct): void {
    this.selectProduct = SelectedProduct;
  }

  getSelectedProduct(): IProduct | null {
    return this.selectProduct
  }
}

export default ProductCatalog