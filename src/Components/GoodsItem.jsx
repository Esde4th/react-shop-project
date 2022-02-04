import React from 'react';
import { useEffect, useState } from 'react';

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToCart = Function.prototype,
        removeFromCart = Function.prototype,
        order = [],
    } = props;

    const [isBuyActive, setBuyActive] = useState(false);

    const addOrRemoveFromCart = () => {
        if (!isBuyActive) {
            addToCart({ id, name, price });
            setBuyActive(true);
        } else {
            removeFromCart(id);
            setBuyActive(false);
        }
    };

    useEffect(() => {
        if (isBuyActive) {
            const itemIndex = order.findIndex(
                (orderItem) => orderItem.id === id
            );
            if (itemIndex < 0) {
                setBuyActive(false);
            }
        }
    }, [order]);

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => {
                        addOrRemoveFromCart();
                    }}
                >
                    {isBuyActive ? 'in cart' : 'buy'}
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    ${price}
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
