import { Company } from './api.generated.service';

export const MockedCompanies: Company[] = [
  {
    id: 1, name: 'mocked 1', address: 'address 2'
  },
  {
    id: 21, name: 'mocked 2', address: 'address 2'
  },
  {
    id: 3, name: 'mocked 3', address: 'address 3'
  },
];

export const MockCompany: Company = {
  id: 3, name: 'mocked 3', address: 'address 3'
};
