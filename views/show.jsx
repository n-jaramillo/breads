import React from 'react'
import Default from './layouts/default'

function Show({ bread }) {
    // Confirm we are getting our bread data in the terminal
    // console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3 className='breadHeader'>{bread.name}</h3>
            <p>
                {/* Bread Ingredients: 
                <ul className='breadInfo'>
                        {
                        bread.ingredientList.map((ingredients) => {
                            return (
                                <li>
                                    {ingredients}
                                </li>
                            )
                        })
                    } 
                </ul> */}
                It
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy()}</p>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' className='deleteBtn' />
            </form>
            <a href={`/breads/${bread.id}/edit`}><button className='btn'>Edit</button></a>
            <a href='/breads'><button className='btn'>Go home</button></a>
        </Default>
    )
}

export default Show