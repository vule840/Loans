export interface Loan {
  id: string;
  organisation: string;
  amount: number;
  startDate: Date;
  endDate?: Date;
}


export const loanRepository: Loan[] = [
  {
    id: "123",
    organisation: "org-1",
    amount: 10000,
    startDate: new Date(2020, 8, 1),
    endDate: new Date(2020, 10, 6)
  },
  {
    id: "213",
    organisation: "org-1",
    amount: 20000,
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2020, 11,5)
  }
  ,
  {
    id: "321",
    organisation: "org-2",
    amount: 10000,
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2020, 9, 2)
  },

]