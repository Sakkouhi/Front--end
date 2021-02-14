export class Address {

    constructor(
      public streetAddress: string,
      public subdivision: string,
      public postalCode: string,
      public locality: string,
      public country: string,
      public id?: string
    ) {
    }
  }
  