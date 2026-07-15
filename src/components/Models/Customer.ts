import {IBuyer, TPayment, Validation, ErrorValid} from "../../types";

class Customer {
  private payment: TPayment | ''= '';
  private address: string = '';
  private phone: string = '';
  private email: string = '';

  savePayment(method: TPayment | ''): void {
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
    const errors: ErrorValid<IBuyer> = {};

    if (this.payment === '') {
      errors.payment = 'Не выбран вид оплаты';
    } if (this.email === '') {
      errors.email = 'Укажите емэйл';
    } if (this.address === '') {
      errors.address = 'Укажите адрес';
    } if (this.phone === '') {
      errors.phone = 'Укажите телефон';
    }
    const isValid = Object.keys(errors).length === 0;
    return {isValid, errors };
    }
}

export default Customer