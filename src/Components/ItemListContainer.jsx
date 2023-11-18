import React from 'react'
import { Center } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams} from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const { category} = useParams()
  const productos = [
    {id: 1, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 1, Precio: "", Categoria: "Comic"},
    {id: 2, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 2, Precio: "", Categoria: "Comic"},
    {id: 3, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 3, Precio: "", Categoria: "Comic"},
    {id: 4, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 4, Precio: "", Categoria: "Manga"},
    {id: 5, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 5, Precio: "", Categoria: "Manga"},
    {id: 6, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 6, Precio: "", Categoria: "Manga"},
    {id: 7, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 7, Precio: "", Categoria: "VideoJuegos"},
    {id: 8, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 8, Precio: "", Categoria: "VideoJuegos"},
    {id: 9, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 9, Precio: "", Categoria: "VideoJuegos"},
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
    <Center>
      <ItemList
        productos={filteresProducts}
      />
    </Center>
  )
}

export default ItemListContainer