import validate from 'uuid-validate';
import 'dotenv/config';

export default class Product {
   constructor(
      private _id: string,
      private _name: string,
      private _price: number,
   ) {
      this.validate();
   }

   get id() {
      return this._id;
   }

   get name() {
      return this._name;
   }

   get price() {
      return this._price;
   }

   validate() {
      if (this._id.length === 0 || validate.version(this._id) !== 4) {
         throw new Error('ID is required and must be a valid UUID');
      } else if (this._name.length === 0) {
         throw new Error('Name is required');
      } else if (this._price <= 0) {
         throw new Error('Price must be greater than zero');
      }
   }

   changePrice(_price: number) {
      this._price = _price;
      this.validate();
   }

   toString() {
      return `${this._id} - ${this._name} - ${this._price}`;
   }
}
