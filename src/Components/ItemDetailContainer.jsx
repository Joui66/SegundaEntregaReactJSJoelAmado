import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
  const { category} = useParams()
  const productos = [
    {id: 1, nombre: "Producto A", descripción: "Descripción del producto", Stock: 1, category: "cat1"},
    {id: 2, nombre: "Producto A", descripción: "Descripción del producto", Stock: 2, category: "cat1"},
    {id: 3, nombre: "Producto A", descripción: "Descripción del producto", Stock: 3, category: "cat1"},
    {id: 4, nombre: "Producto A", descripción: "Descripción del producto", Stock: 4, category: "cat2"},
    {id: 5, nombre: "Producto A", descripción: "Descripción del producto", Stock: 5, category: "cat2"},
    {id: 6, nombre: "Producto A", descripción: "Descripción del producto", Stock: 6, category: "cat2"},
    {id: 7, nombre: "Producto A", descripción: "Descripción del producto", Stock: 7, category: "cat3"},
    {id: 8, nombre: "Producto A", descripción: "Descripción del producto", Stock: 8, category: "cat3"},
    {id: 9, nombre: "Producto A", descripción: "Descripción del producto", Stock: 9, category: "cat3"},
  ]

  const getProducts = new Promise((resolve, reject)=>{
    if(productos.length > 0){
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }else{
      reject(new Error("Error al cargar los datos"))
    }
  })

  getProducts
  .then((res)=>{
  })
  .catch((error)=>{
    console.log(error)
  })

  const filteresProducts = productos.filter((producto) => producto.category === category)

  return (
    <ItemDetail
      productos={productos}
    />
  )
}

export default ItemDetailContainer