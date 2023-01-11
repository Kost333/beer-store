import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decreaseItemInCart, increaseItemInCart, removeItemFromCart} from "../../store/cart/cartSlice";
import classes from './Cart.module.css'
import {FaRegWindowClose, FaArrowDown, FaArrowUp} from "react-icons/fa";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router";

const Cart = () => {
    const items = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleIncreaseItem = (id) => {
        dispatch(increaseItemInCart(id));
    };

    const handleDecreaseItem = (id) => {
        dispatch(decreaseItemInCart(id));
    };

    return (
        <div className={classes.cartRoot}>
            {items.length === 0 && (
                <div className={classes.cartItemBackToStore}>
                    <h2>There os no items</h2>

                    <Button className="primary" onClick={() => navigate('/', {replace: true})}>
                        Go back to home
                    </Button>
                </div>
            )}

            {items.map((item) => (
                <div key={item.id} className={classes.cartItem}>
                    <div className={classes.cartItemImg}>
                        <img src={`/images/${item.image}`} alt="cart-item"/>
                    </div>

                    <div className={classes.cartItemText}>
                        <h2 className={classes.cartItemTitle}>{item.name}</h2>
                        <p className={classes.cartItemDescription}>{item.title}</p>
                    </div>

                    <div className={`${classes.cartItemArrowsContainer} ${classes.cartItemBorderContent}`}>
                        <div onClick={() => handleDecreaseItem(item.id)} className={classes.cartItemArrowDecrease}>
                            <FaArrowDown color="#ccb27f"/>
                        </div>

                        <div>
                            <p>{item.count}</p>
                        </div>

                        <div onClick={() => handleIncreaseItem(item.id)} className={classes.cartItemArrowIncrease}>
                            <FaArrowUp color="#ccb27f"/>
                        </div>
                    </div>

                    <div className={`${classes.cartItemRemove} ${classes.cartItemBorderContent}`}
                         onClick={() => handleRemoveItem(item.id)}>
                        <FaRegWindowClose color="red"/>
                    </div>

                    <div>
                        <p className={classes.cartItemPrice}>{`$${item.count * item.price}`}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
