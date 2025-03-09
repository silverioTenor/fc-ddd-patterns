import ICustomertRepository from '@domain/customer/repository/customer.interface';
import { InputFindCustomerDto, OutputFindCustomerDto } from './find.customer.dto';
import Customer from '@domain/customer/entity/customer';

export default class FindCustomerUseCase {
   constructor(private customerRepository: ICustomertRepository) {}

   async execute(input: InputFindCustomerDto): Promise<OutputFindCustomerDto> {
      let customer = await this.customerRepository.find(input.id);
      
      return !!customer
         ? {
              id: customer.id,
              name: customer.name,
              address: {
                 street: customer.address.street,
                 number: customer.address.number,
                 city: customer.address.city,
                 state: customer.address.state,
                 country: customer.address.country,
                 postalCode: customer.address.postalCode,
              },
           }
         : ({} as OutputFindCustomerDto);
   }
}
