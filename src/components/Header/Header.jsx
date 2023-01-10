import React from 'react';
import classes from './Header.module.css';
import image from './../../assets/header_image.jpg';
import logo from "./../../assets/icons/burger_menu.jpg";

const Header = () => {

    const navigation = [
        {name: 'HOME', href: '/'},
        {name: 'SHOP', href: '/store'},
        {name: 'OUR BEER', href: '/'},
        {name: 'OUR STORY', href: '/'},
        {name: 'CONTACT', href: '/'}
    ];

    const countItem = 0;

    return (
        <div>
            <div className={classes.navbar}>
                <div className={classes.navSocialMedia}>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>
                <div className={classes.basketBeer}>
                    <p>Find our beer</p>
                    <div className={classes.line}></div>
                    <p>{countItem} item</p>
                </div>
            </div>
            <div>
                <div className={classes.nav}>

                    <div className={classes.headerImage}>
                        <img src={image} alt="Image" height='80' width='90'/>
                    </div>

                    <div className={classes.headerBurger}>
                        <img src={logo} alt="Burger" height='30' width='30'/>
                    </div>
                    <div className={classes.navBarHeader}>
                        {
                            navigation.map((item) => {
                                return (
                                    <div key={item.name.toLowerCase()}>
                                        <ul>
                                            <a className={classes.navText} href={item.href}>{item.name}</a>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={classes.headerTitle}>
                    <h4>A very warm welcome to our</h4>
                    <h2>BEER SHOP</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;
