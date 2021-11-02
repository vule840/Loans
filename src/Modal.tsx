import { useContext, useState } from "react";
import StoreContext from "./store/StoreContex";

//add objects in onchange
//add second wrapper-
const Add = (props: any) => {
  const ctx = useContext(StoreContext);
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  console.log(ctx);

  const submitValue = (e: any) => {
    e.preventDefault();
    let newLoan = {
      amount,
      startDate: new Date(date!),
      id: String(Math.floor(Math.random() * 10) + 1),
    };
    ctx.addItem(newLoan);
  };
  const amountS = (e: any) => {
    setAmount(e.target.value);
  };
  const dateS = (e: any) => {
    setDate(e.target.value);
  };
  return (
    <div className="modal_wrapper">
      <div className="modal">
        <h2>Your Loans</h2>
        <h2>Create</h2>
        <form onSubmit={(e) => submitValue(e)} action="">
          <input onChange={(e) => amountS(e)} type="number" />
          <input onChange={(e) => dateS(e)} type="date" />
          <input type="submit" />
        </form>
      </div>
      <span onClick={() => ctx.toggleHandler()} className="close">
        X
      </span>
    </div>
  );
};

export default Add;
