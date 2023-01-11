import {useEffect} from "react";
import {useSelector} from "react-redux";

const useCartLocalStorage = () => {
    const items = useSelector((state) => state.cart.items);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items))
    }, [items])

    return null
}

export default useCartLocalStorage;
