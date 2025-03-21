import HttpValidation from "@infra/@shared/api/error/http.validation.error";

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
      if (!(!!this.street)) {
         throw new HttpValidation('Street is required!');
      } else if (this.number === 0) {
         throw new HttpValidation('Number is required!');
      } else if (!(!!this.city)) {
         throw new HttpValidation('City is required!');
      } else if (!(!!this.state)) {
         throw new HttpValidation('State is required!');
      } else if (!(!!this.country)) {
         throw new HttpValidation('Country is required!');
      } else if (!(!!this.postalCode) || this.postalCode <= 0) {
         throw new HttpValidation('Postal code is required!');
      }
   }

   toString() {
      return `${this.street}, ${this.number} - ${this.city}/${this.state}, ${this.country} - ${this.postalCode}`;
   }
}
