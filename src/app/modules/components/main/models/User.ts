import { Address } from './Address';
import { Company } from './Company';

export class User {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
  }