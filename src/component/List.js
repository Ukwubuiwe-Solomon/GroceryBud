import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className='max-w-[400px] mx-auto w-[200px] justify-between items-center'>
        {items.map((item)=>{
            const {id, title} = item
            return(
                <div key={id} className='flex justify-between items-center'>
                    <p>{title}</p>
                    <div className='mx-4'>
                    <button type='button' className='mr-2'>
                        <FaEdit onClick={()=> editItem(id)} className='text-green-600'/>
                    </button>
                    <button type='button'>
                        <FaTrash onClick={()=> removeItem(id)} className=' text-red-600'/>
                    </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default List