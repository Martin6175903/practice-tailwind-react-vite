import React from 'react';

const HeaderLink = ({title}) => {
    return (
        <div>
            <li><a className="hover:text-pink" href="#">{title}</a></li>
        </div>
    );
};

export default HeaderLink;