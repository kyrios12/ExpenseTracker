import { createContext, useContext} from 'react';

const ExpenseContext = createContext();

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};
