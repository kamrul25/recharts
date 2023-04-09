import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mx-12 hover:bg-purple-600'>
            <a href={route.path}>{route.name}</a>
       </li>
    );
};

export default Link;