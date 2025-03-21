import Customer from '../../customer/entity/customer';
import Product from '../../product/entity/product';
import Order from '../entity/order';
import OrderFactory from './order-factory';

describe('Order factory unit tests', () => {
   it('should create a new order', () => {
      const orderFactory = new OrderFactory();
      const customer = new Customer('Willy Wonka');
      const product = new Product('Product XPTO', 200);
      const order = orderFactory.create({
         customerId: customer.getId(),
         products: [
            {
               id: product.getId(),
               name: product.getName(),
               price: product.getPrice(),
               quantity: 2,
            },
         ],
      });

      expect(order).toBeDefined();
      expect(order).toBeInstanceOf(Order);
      expect(order.total()).toBe(400);
   });
});
