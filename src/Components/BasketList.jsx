import React from 'react';
import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>CART</li>
            {order.length ? (
                order.map((item) => {
                    return (
                        <BasketItem
                            key={item.id}
                            {...item}
                            removeFromCart={removeFromCart}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                        />
                    );
                })
            ) : (
                <li className='collection-item grey darken-4 deep-purple-text text-lighten-4'>
                    No items here
                </li>
            )}

            <li className='collection-item active'>
                TOTAL COST: ${totalPrice}
            </li>
            <li className='collection-item grey darken-4 deep-purple-text text-lighten-4'>
                <button className='btn'>buy</button>
            </li>

            <i
                className='material-icons grey-text text-darken-4 basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
