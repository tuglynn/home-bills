import React from 'react';


class Nav extends React.Component {
    render() {
        return(
            <div className='nav'>
                <nav>
                    <ul className='nav-list'>
                        <li><button className='nav-item'>Home</button></li>
                        <li><button className='nav-item'>Add Bill</button></li>
                        <li><button className='nav-item'>More Info</button></li>
                        <il><button className='nav-item'>All Bills</button></il>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Nav;