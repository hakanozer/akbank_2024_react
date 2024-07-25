import React from 'react'

function Search( props: 
    {
        setSearch: React.Dispatch<React.SetStateAction<string>>,
        placeholder?: string
    } ) 
{
  return (
    <>
    <div className='mb-2 mt-2 col-4'>
        <input onChange={(evt) => props.setSearch(evt.target.value)} className='form-control' placeholder={props.placeholder ? props.placeholder : 'Search..'} />
    </div>
    </>
  )
}

export default Search