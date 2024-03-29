import React from 'react'
import Default from './layouts/default'

function New({ bakers }) {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                />
                <label htmlFor='image'>Image</label>
                <input
                    type='url'
                    name='image'
                    id='image'
                    title='http:// or https://'
                />
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input
                    type='checkbox'
                    name='hasGluten'
                    id='hasGluten'
                    defaultChecked
                />
                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker'>
                    {bakers.map((baker) => {
                        return (
                            <option value={baker.id} key={baker.id}>{baker.name}</option>
                        )
                    })}
                </select>
                <br />
                <input type='submit' />
            </form>
            <div className='backButton'>
                <a href='/breads'><button className='btn'>Go back to the index</button></a>
            </div>
        </Default>
    )
}

export default New