import React, { useReducer, useState } from "react";
import { loanRepository } from "../data";
//import { Loans } from "../Loans";

const defaultLoanState = {
  loans: loanRepository,
};

const loansReducer = (state: any, action: any) => {
  if (action.type === "ADD_LOAN") {
    let addedLoan;
    // console.log(action);
    addedLoan = [...state.loans, action.loan];
    // console.log(addedLoan);
    return {
      loans: addedLoan,
    };
  }
  if (action.type === "REMOVE_LOAN") {
    let removedLoan;
    removedLoan = state.loans.filter((loan: any) => loan.id !== action.id);
    return {
      loans: removedLoan,
    };
  }

  return defaultLoanState;
};

const StoreContext = React.createContext<any>({
  loans: loanRepository,
  addItem: () => {},
  removeItem: () => {},
  toggle: false,
});

export const ContextProvider = (props: any) => {
  //const [loanstodisplay, setLoans] = useState([]);

  const [loansState, dispatchLoans] = useReducer(
    loansReducer,
    defaultLoanState
  );
  const [toggle, setToggle] = useState(false);

  const addLoanHandler = (loan: any) => {
    dispatchLoans({ type: "ADD_LOAN", loan: loan });
    // console.log("msdf");
  };
  const removeLoanHandler = (loan: any) => {
    dispatchLoans({ type: "REMOVE_LOAN", id: loan.id });
    // const removed = loanRepository.filter((x) => x.id !== loan.id);
    // console.log(loans);
  };
  const toggleModal = () => {
    console.log(toggle);
    setToggle((toggle) => !toggle);
  };
  return (
    <StoreContext.Provider
      value={{
        loans: loansState.loans,
        removeItem: removeLoanHandler,
        addItem: addLoanHandler,
        toggle: toggle,
        toggleHandler: toggleModal,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
