import React from "react";
import classes from "./Header.module.css";
import image from "../../assets/images/beerl-logo.png";
import logo from "./../../assets/icons/burger_menu.jpg";
import {useSelector} from "react-redux";
import {
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaCartArrowDown,
    FaMapMarkerAlt
} from "react-icons/fa";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const {title, description} = useSelector((state) => state.layout.headerText);
    const items = useSelector((state) => state.cart.items);

    const countItem = items.length;

    const navigation = [
        {name: 'HOME', href: '/'},
        {name: 'SHOP', href: '/store'},
        {name: 'OUR BEER', href: '/'},
        {name: 'OUR STORY', href: '/'},
        {name: 'CONTACT', href: '/'}
    ];


    const handleNavigateToCart = () => {
        navigate('/cart', {replace: true})
    }


    return (
        <div className={classes.headerBg}>
            <div className={classes.headerContent}>
                <div className={classes.navbar}>
                    <div className={classes.navSocialMedia}>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com" className="text-white">
                                <FaLinkedinIn className={classes.webSocialIcons}/>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com" className="text-white">
                                <FaTwitter className={classes.webSocialIcons}/>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://instagram.com" className="text-white">
                                <FaInstagram className={classes.webSocialIcons}/>
                            </a>
                        </div>
                    </div>
                    <div className={classes.basketBeer}>
                        <p><FaMapMarkerAlt className={classes.findBasket}/>Find our beer</p>
                        <div className={classes.line}></div>
                        <div onClick={handleNavigateToCart}>
                            <p><FaCartArrowDown className={classes.findBasket}/>{countItem} item</p>
                        </div>
                    </div>
                </div>

                <div className={classes.nav}>
                    <div className={classes.headerImage}>
                        <img src={image} alt="site-logo" height="80" width="90"/>
                    </div>

                    <div className={classes.headerBurger}>
                        <img src={logo} alt="Burger" height="30" width="30"/>
                    </div>

                    <div className={classes.navBarHeader}>
                        {navigation.map((item) => (
                            <div key={item.name.toLowerCase()}>
                                <ul>
                                    <Link className={classes.navText} to={item.href}>
                                        {item.name}
                                    </Link>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.headerTitle}>
                    <h4>{description}</h4>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;
