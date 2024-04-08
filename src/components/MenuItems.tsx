import { Dispatch } from 'react'
import { MenuItem } from "../types"
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
   item:MenuItem,
   dispatch: Dispatch<OrderActions>
}

export default function MenuItems({item, dispatch}:MenuItemProps) {
   return (
      <button
         className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
         onClick={() => dispatch({type: 'add-item', payload: {item}})}
      >
         <p>{item.name}</p>
         <p className="font-black">$ {item.price}</p>
      </button>
   )
}
