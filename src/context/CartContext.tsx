import React, { useState } from "react";

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../assets/image/logo-main-blac... Remove this comment to see the full error message
import imgP1 from "../assets/image/logo-main-black.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../assets/image/logo-main-blac... Remove this comment to see the full error message
import imgP2 from "../assets/image/logo-main-black.png";

// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
const CartContext = React.createContext();

const defaultItems = [
  {
    id: "p1",
    title: "Amazon Echo Super Extra Bass Home System",
    img: imgP1,
    qty: 2,
    price: 70,
  },
  {
    id: "p2",
    title: "Apple AirPods with Wired Charging Case",
    img: imgP2,
    qty: 1,
    price: 150,
  },
];

const CartProvider = ({
  children
}: any) => {
  const [products, setProducts] = useState(defaultItems);

  const incProdQty = (productId: any) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId) {
        return { ...pr, qty: pr.qty + 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const decProdQty = (productId: any) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId && pr.qty > 0) {
        return { ...pr, qty: pr.qty - 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const removeProduct = (productId: any) => {
    setProducts([...products.filter(({ id }) => id !== productId)]);
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CartContext.Provider
      value={{
        products,

        removeProduct,
        incProdQty,
        decProdQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
