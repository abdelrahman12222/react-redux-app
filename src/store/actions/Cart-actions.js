export const Add = (amount) => {
    return {
      type: "Add_Cart",
      payload: amount,
    };
  };
export  const Remove = (amount) => {
    return {
      type: "Remove_Cart",
      payload: amount,
    };
  };
  