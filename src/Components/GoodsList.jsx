import React from 'react';
import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const {
        goods = [],
        removeFromCart = Function.prototype,
        addToCart = Function.prototype,
        order = [],
    } = props;

    if (!goods.length) {
        return <h3>Ничего нет :(</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem
                    key={item.id}
                    {...item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    order={order}
                />
            ))}
        </div>
    );
}

export { GoodsList };
