import React from 'react'

const List = (props) => {
  return (
    <>
    <table border="5" className='items'>
        <tr>
            <th>Songs</th>
        </tr>
    {
    props.data.map((item,idx)=>{
       return( 
       <>
       <tr>
       <td onClick={(e)=>{props.selectHandler(idx)}} >{item.title}</td>
        </tr>
        </>
       )
    })
   }
   </table>
    </>
  )
}

export default List