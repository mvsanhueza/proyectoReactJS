import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const ItemQuantitySelector = ({count, setCount}) => {

    const handleAdd = () =>{
        setCount(count + 1);
    }

    const handleRemove = () =>{
        if(count > 1)
        setCount(count - 1);
    }

  return (
    <div>
        <IconButton onClick={handleRemove}>            
            <RemoveCircleOutline sx={{color: "#f68a7fff"}}/>
        </IconButton>
        <span>{count}</span>
        <IconButton color='#f68a7fff' onClick={handleAdd}>
            <AddCircleOutline sx={{color: "#f68a7fff"}}/>
        </IconButton>        
    </div>
  )
}

export default ItemQuantitySelector