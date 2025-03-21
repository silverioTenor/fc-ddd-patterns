export interface InputFindCustomerDto {
   id: string;
}

export interface OutputFindCustomerDto {
   id: string;
   name: string;
   rewardPoints: number;
   active: boolean;
   address: {
      street: string;
      number: number;
      city: string;
      state: string;
      country: string;
      postalCode: number;
   };
}
