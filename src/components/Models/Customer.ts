import {IBuyer} from "../../types";
import {TPayment} from "../../types"
import {Validation} from "../../types"
import {ErrorValid} from "../../types"
class Customer {
  private payment: TPayment = '';
  private address: string = '';
  private phone: string = '';
  private email: string = '';

  savePayment(method: TPayment): void {
    this.payment = method;
  }

  saveAddress(address: string): void {
    this.address = address;
  }

  saveEmail(email: string): void {
    this.email = email;
  }

  savePhone(phone: string): void {
  this.phone = phone;
  }

  getCustomerData() {
    return {
    phone: this.phone,
    email: this.email,
    address: this.address,
    payment: this.payment
    };
  }
    clearCustomerData(): void {
      this.phone = '';
      this.email = '';
      this.address = '';
      this.payment = '';
    }
   
    validateData(): Validation<IBuyer>{
    const error: ErrorValid<IBuyer> = {};

    if (this.payment === '') {
      error.payment = 'Не выбран вид оплаты';
    } if (this.email === '') {
      error.email = 'Укажите емэйл';
    } if (this.address === '') {
      error.address === 'Укажите адрес';
    } if (this.phone === '') {
      error.phone = 'Укажите телефон';
    }
    const isValid = Object.keys(error).length === 0;
    return {isValid, error };
    }
}

export default Customer