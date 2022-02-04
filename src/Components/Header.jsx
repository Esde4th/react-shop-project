import React from 'react';

function Header() {
    return (
        <nav className='deep-purple lighten-2'>
            <div className='nav-wrapper'>
                <a
                    href='/'
                    className='brand-logo deep-purple-text text-lighten-5'
                >
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/Esde4th/react-shop-project'
                            target='_blank'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
