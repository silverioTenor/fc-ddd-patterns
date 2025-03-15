import HttpValidation from "@infra/api/errors/http.validation.error";

export default class Address {
   private street: string;
   private number: number;
   private city: string;
   private state: string;
   private country: string;
   private postalCode: number;

   constructor(
      street: string,
      number: number,
      city: string,
      state: string,
      country: string,
      postalCode: number,
   ) {
      this.street = street;
      this.number = number;
      this.city = city;
      this.state = state;
      this.country = country;
      this.postalCode = postalCode;

      this.validate();
   }

   getStreet() {
      return this.street;
   }

   getNumber() {
      return this.number;
   }

   getCity() {
      return this.city;
   }

   getState() {
      return this.state;
   }

   getCountry() {
      return this.country;
   }

   getPostalCode() {
      return this.postalCode;
   }

   validate() {
      if (this.street.length === 0) {
         throw new HttpValidation('Street is required!');
      } else if (this.number === 0) {
         throw new HttpValidation('Number is required!');
      } else if (this.city.length === 0) {
         throw new HttpValidation('City is required!');
      } else if (this.state.length === 0) {
         throw new HttpValidation('State is required!');
      } else if (this.country.length === 0) {
         throw new HttpValidation('Country is required!');
      } else if (this.postalCode <= 0) {
         throw new HttpValidation('Postal code is required!');
      }
   }

   toString() {
      return `${this.street}, ${this.number} - ${this.city}/${this.state}, ${this.country} - ${this.postalCode}`;
   }
}
