import {Address} from './address';

export class Contact {

  constructor(
    public type: string,
    public address: Address,
    public email: string,
    public mobilePhoneNumber: string,
    public id?: string
  ) {
  }
}
