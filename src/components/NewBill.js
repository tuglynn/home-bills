import React from 'react';

class NewBill extends React.Component {
    render() {
        return(
            <div className='new-bill'>
                <form>
                    <select>
                        <option>Select a bill from your list</option>
                        <option name='category-of-bill' value='water'>Water</option>
                        <option name='category-of-bill' value='gas-and-electric'>Gas & Electric</option>
                    </select>
                    <input type='text' name='name-of-bill' placeholder='Name of Bill'/>
                    <input type='date' name='date' />
                    <input type='text' name='amount' placeholder='Amount of bill' />
                    <input type='submit' value="submit"/>
                </form>
            </div>
        )
    }
};

export default NewBill;