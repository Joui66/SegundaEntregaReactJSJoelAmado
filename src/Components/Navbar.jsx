import React from 'react'
import CardWidget from './CardWidget'
import { Menu, MenuButton, MenuList, MenuItem , Flex , Spacer , Box} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import brand from '../img/download.jpg'

const Navbar = () => {
  const categorias = ['Comic', 'Manga', 'VideoJuegos'];
  
  return (
    <div>
<Flex>
  <Box>
    <Link to={"/"}>
    <img src={brand} alt=""  width='60px' height='60px'/>
    <h2 scr>El Bazar Friki</h2>
    </Link>  
  </Box>
  <Spacer/>
  <Menu>
  <MenuButton>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>
      <Link to={`/category/${'Comic'}`}>
      Comics
      </Link>
    </MenuItem>
    <MenuItem>
    <Link to={`/category/${'Manga'}`}>
      Mangas
      </Link>
    </MenuItem>
    <MenuItem>
    <Link to={`/category/${'VideoJuegos'}`}>
    VideosJuegos
    </Link>
    </MenuItem>
  </MenuList>
</Menu>
  <Spacer/>
  <Box p='4'>
    <Link to={'/Cart'}>
    <CardWidget/>
    </Link>
    
  </Box>
</Flex>


    </div>
  )
}

export default Navbar