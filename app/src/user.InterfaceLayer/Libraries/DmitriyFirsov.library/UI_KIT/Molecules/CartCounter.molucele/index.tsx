import React from "react";
import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { decrementQuantity, incrementQuantity } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/slice/cart.slice";

import * as ST from "./styled";
import { ReactComponent as Minus } from "../../../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";

const CartCounter = ({id, quantity}: any) => {

  const dispatch = useAppDispatch();

	return (
    <ST.ProductCounter>
      <ST.CounterButton
        onClick={ () =>  dispatch(decrementQuantity(id)) }
        disabled={ quantity === 1 }
      >
        <Minus />
      </ST.CounterButton>
      <ST.CounterInput
        value={ quantity }
        readOnly
      />
      <ST.CounterButton
        onClick={ () => dispatch(incrementQuantity(id)) }
      >
        <Plus />
      </ST.CounterButton>
    </ST.ProductCounter>
  );
};

export default CartCounter;
