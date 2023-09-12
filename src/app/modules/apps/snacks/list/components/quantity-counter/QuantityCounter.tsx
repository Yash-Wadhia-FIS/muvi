import React, {useState, useEffect} from "react"

interface Counter {
  quantity: number;
  onAddQuantity: () => void;
  onRemoveQuantity: () => void;
}

const QuantityCounter = ({quantity, onAddQuantity, onRemoveQuantity}: Counter) => {

  return (
    <div>
      <div className="input-group justify-content-start align-items-center">
         <input type="button" value="-" className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" onClick={onRemoveQuantity} />
         <input type="number" step="1" max="10" value={quantity} name="quantity" className="quantity-field border-0 text-center w-25" />
         <input type="button" value="+" className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" onClick={onAddQuantity} />
      </div>
    </div>
  )
}

export {QuantityCounter}
