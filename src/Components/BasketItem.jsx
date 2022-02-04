import React from 'react';

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item grey darken-4  deep-purple-text text-lighten-4'>
            {name}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity} руб.
            <span className='secondary-content'>
                <i
                    className='material-icons  deep-purple-text text-lighten-3 basket-item-delete'
                    onClick={() => removeFromCart(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
