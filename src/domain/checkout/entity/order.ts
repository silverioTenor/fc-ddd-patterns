import { v4 as uuid} from 'uuid';
import validate from 'uuid-validate';
import OrderItem from './order-item';
import 'dotenv/config';
import HttpValidation from '@infra/@shared/api/error/http.validation.error';

export default class Order {
   private id: string;
   private customerId: string;
   private items: OrderItem[];

   constructor(customerId: string, items: OrderItem[], id?: string) {
      this.id = !!id ? id : uuid();
      this.customerId = customerId;
      this.items = items;

      this.validate();
   }

   getId() {
      return this.id;
   }

   getCustomerId() {
      return this.customerId;
   }

   getItems() {
      return this.items;
   }

   validate() {
      if (!(!!this.id) || validate.version(this.id) !== 4) {
         throw new HttpValidation('Id is required!');
      } else if (!(!!this.customerId) || validate.version(this.customerId) !== 4) {
         throw new HttpValidation('Customer id is required!');
      } else if (!!this.items && this.items.length <= 0) {
         throw new HttpValidation('Must have at least one item!');
      }

      const isQuantityMinor = this.items.some((item: any) => item.quantity <= 0);

      if (isQuantityMinor) {
         throw new HttpValidation('Quantity must be greater than zero!');
      }
   }

   addItem(item: OrderItem) {
      this.items.push(item);
   }

   removeItem(item: OrderItem) {
      const index = this.items.indexOf(item);
      if (index > -1) {
         this.items.splice(index, 1);
      }
   }

   total() {
      return this.items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
   }

   toString() {
      return `Order #${this.id} - Customer #${this.customerId}`;
   }
}
