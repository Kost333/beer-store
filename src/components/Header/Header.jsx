import React from 'react';
import classes from './Header.module.css';

const Header = () => {

    const navigation = [
        {name: 'HOME', href: '/'},
        {name: 'SHOP', href: '/'},
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
                <div>
                    <p>Find our beer</p>
                </div>
                <div>
                    <p>{countItem} item</p>
                </div>
            </div>
            <div className={classes.nav}>
                <div style={{height: '200px', width: '200px', backgroundColor: "#fff", color: "#000",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Image</div>
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
    );
};

export default Header;
