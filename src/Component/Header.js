import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faSquarePlus, faStore, faBars, faHeart, faGift, faTruckFast, faBagShopping, faFire, faLanguage, faFaceSmile, faSquare, faGrid2, faCoins, faZap, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Header = () => {
    const [show, setshow] = useState(false);

    const handleShow = () => setshow(true);
    const handleClose = () => setshow(false);
    return (
        <div className='header'>
        <div className='mx-w df jcsb '>
            <div className='df'>
                <div className='navdn'><button variant="primary" onClick={handleShow}> <img src='./icon/nav.svg' className="bar" /></button>
                    <Offcanvas show={show} onHide={handleClose} className="offc">
                        <Offcanvas.Header closeButton className='offcanva'>
                            <Offcanvas.Title className='title'><img src='./logo/flipkart-logo.png' /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='ofbt'>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faCoins} className="offpd" />SuperCoin Zone</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faZap} className="offpd" />Flipkart Plus Zone</button>
                                </div>
                                <hr className='hr' />
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faBars} className="offpd" />All Categories</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faStore} className="offpd" />Treding Stores</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faFaceSmile} className="offpd" />More on Flipkart</button>
                                </div>
                                <hr className='hr' />
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faLanguage} className="offpd" />Choose Language</button>
                                </div>
                                <hr className='hr' />
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faFire} className="offpd" />Offer Zone</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faBagShopping} className="offpd" />Sell on Flipkart</button>
                                </div>
                                <hr className='hr' />
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faTruckFast} className="offpd" />My Order</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faGift} className="offpd" />Coupons</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faCartShopping} className="offpd" />My Card</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faHeart} className="offpd" />My Wishlist</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> <FontAwesomeIcon icon={faUser} className="offpd" />My Account</button>
                                </div>
                             
                                <hr className='hr' />
                                <div className=''>
                                    <button className='offbtn'>Notification Preferences</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'> Help Center</button>
                                </div>
                                <div className=''>
                                    <button className='offbtn'>Legal</button>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='logo'><img src='./logo/flip.svg' alt='flip' /></div>
            </div>
            <div className='df'>
                <div className=' downdf'><button className='down'><img src='./icon\down.svg'/></button></div>
                <div className='login pdtop'><button className='log'><img src='./icon\icons8-user-96.png'/></button></div>
                <p className='logtxt pdtxt'>Login</p>
                <div className='login pdtop'><button className='card'><img src='./icon\card.svg'/></button></div>
                <div className='dn pdtxt'><p className='logtxt dn'>Card</p></div>
                <div className='login dn pdtop'><button className='becom'><img src='./icon\become seller.svg'/></button></div>
                <div className='dn pdtxt'><p className='logtxt '>Become a Seller</p></div>
         
            </div>
        </div>
        <div>
            <div className='input'>
                 <input placeholder='Search for products,Brands and More' /> 
                
            </div>
         
        </div>
    </div>
    );
}

export default Header;
