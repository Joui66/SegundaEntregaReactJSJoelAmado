import React from 'react'
import Cart from './Cart' 
import { Badge } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const CardWidget = () => {
  return (
    <div>
      <FaCartShopping />
      <Badge>5</Badge>
    </div>
  )
}

export default CardWidget