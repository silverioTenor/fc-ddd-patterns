import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';
import 'dotenv/config';
import IProduct from './product.interface';
import HttpValidation from '@infra/@shared/api/error/http.validation.error';

export default class Product implements IProduct {
   private id: string;

   constructor(
      private name: string,
      private price: number,
      id?: string,
   ) {
      this.id = !!id ? id : uuid();
      this.validate();
   }

   getId() {
      return this.id;
   }

   getName() {
      return this.name;
   }

   getPrice() {
      return this.price;
   }

   validate() {
      if (!(!!this.id) || validate.version(this.id) !== 4) {
         throw new HttpValidation('ID is required and must be a valid UUID');
      } else if (!(!!this.name)) {
         throw new HttpValidation('Name is required');
      } else if (!(!!this.price) || this.price <= 0) {
         throw new HttpValidation('Price must be greater than zero');
      }
   }

   changePrice(price: number) {
      this.price = price;
      this.validate();
   }

   toString() {
      return `${this.id} - ${this.name} - ${this.price}`;
   }
}
