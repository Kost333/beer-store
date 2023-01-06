import React from 'react';
import classes from './Footer.module.css';
import Container from "../Container/Container";

const navigation_1 = [
    {
        title: "USEFUL", items: [
            {name: "Home", href: "/"},
            {name: "Shop", href: "/shop"},
            {name: "Our story", href: "/ourStore"},
            {name: "Blog", href: "/Blog"},
            {name: "Login", href: "/Login"},
        ]
    },

    {
        title: "HELP", items: [
            {name: "Custormer service", href: "/"},
            {name: "Find our beer", href: "/"},
            {name: "Recent orders", href: "/"},
            {name: "Contact", href: "/"},
            {name: "Terms & Privacy", href: "/"},
        ]
    },

    {
        title: "SHOP", items: [
            {name: "Pale ale", href: "/"},
            {name: "Golden ale", href: "/"},
            {name: "Dark ale", href: "/"},
            {name: "IPA", href: "/"},
        ]
    },


]

const navigation_2 = {
    title: "OUR INFORMATION", items: [
        {name: "94 River Road, London, United Kingdom,", href: "/"},
        {name: "sales@craftbeer-nation.com", href: "/"},
        {name: "(0)203 123 4567", href: "/"},
    ]
}

const Footer = () => {
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.navContainer}>
                    <div className={classes.navListContainer}>
                        {navigation_1.map((item) => (
                            <div key={item.title.toLowerCase()} className={classes.navListContainerItem}>
                                <h2 className={classes.navTitle}>{item.title}</h2>

                                <ul className={classes.navList}>
                                    {item.items.map((i) => (
                                        <li key={i.name.toLowerCase()} className={classes.navListItem}>
                                            <a
                                               className={`${classes.navListItemText} text-yellow`}
                                               href={i.href}>{i.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className={classes.navTitle}>{navigation_2.title}</h2>

                        <ul className={classes.navList}>
                            {navigation_2.items.map((i) => (
                                <li key={i.name.toLowerCase()} className={classes.navListItem}>
                                    <a
                                        className={`${classes.navListItemText} text-white`}
                                        href={i.href}>{i.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <p className='text-white'>2016 © Craft Beer Nation / </p>
                    <p className='text-grey'>Web design by Klever media</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
