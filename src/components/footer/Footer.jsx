import React, { useState } from 'react'
import './footer.css'
import Logo from '../../assets/images/logo-1.svg'
import CollapseInfo from './CollapseInfo'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import PropTypes from 'prop-types';
const Footer = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <footer id='footer'>
            <div className='information'>
                <div className="logo-container">
                    <div className="logo-footer">
                        <img alt="logo-1" aria-label="logo-1" src={Logo} loading="lazy" style={{ objectFit: 'constant' }} className="logo" />
                    </div>
                    <div className="div-footersignup">
                        <p className="title">Sign up for ₱50 OFF your first order!</p>
                        <form method="post" id="signup" className="form">
                            <input type="email" placeholder="email address" required className="div-needsclick"
                            />
                            <button type="submit" className="btn-join">
                                join
                            </button>
                        </form>
                        <p className="text-form">
                            <span className="text-wrapper">
                                *By signing up, you agree to receive marketing emails from
                                FLEXFY. You can unsubscribe any time by clicking the link at the
                                bottom of our emails.
                            </span><br />

                            <a href="#">Privacy & Terms.</a>
                        </p>
                    </div>
                </div>


                <CollapseInfo collapseToggle='Shop' items={['t-shirt', 'jeans', 'jacket', 'clothing & accessories']} />

                <CollapseInfo collapseToggle='Community' items={['about us', 'events', 'the flexfy blog', 'join our rewards program']} />

                <CollapseInfo collapseToggle='Learn' items={['fit guide', 'size charts', 'contact us', 'faqs']} />

                <CollapseInfo collapseToggle='Resouces' items={['returns & exchanges (us)', 'returns (canada)', 'privacy & terms', 'careers']} />


            </div>
            <div className='divfooter-icon d-flex justify-content-start'>
                <div className='divfooter-icon-item'>
                    <a href='#'>
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                </div>
                <div className='divfooter-icon-item'>
                    <a href='#'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <div className='divfooter-icon-item'>
                    <a href='#'>
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </div>
            </div>
            <div className='divfooter-copyright'>
                <div className="copy-right"><p>
                    © Copyright 2023 FLEXFY / <a href="#" className="link-text">Terms
                    </a> /
                    <a href="#" className="link-text">Privacy</a>
                </p>
                </div>
            </div>
            <div className="design-info"><p>Developed by AVL Team</p></div>
            <div className="curency-info">
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                    <DropdownToggle caret>Peso (PHP ₱)</DropdownToggle>
                    <DropdownMenu {...args}>
                        <DropdownItem>Some action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </footer>
    )

}

Footer.propTypes = {
    direction: PropTypes.string,
};
export default Footer
