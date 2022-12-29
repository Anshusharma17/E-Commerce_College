
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import s from './footer.module.css'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <h1 className={s.logo}>Fashion</h1>
                <p className={s.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus beatae, distinctio animi fugiat quasi porro aliquid veritatis, consequatur et, maiores recusandae! Quod neque eos placeat illo ab itaque deserunt velit?</p>
                <div className={s.socialCon}>
                    <div className={s.socialicon}>
                        <AiFillFacebook />
                    </div>
                    <div className={s.socialicon}>
                        <AiFillInstagram />
                    </div>
                    <div className={s.socialicon}>
                        <FaTwitterSquare />
                    </div>
                </div>

            </div>
            <div className={s.center}>
                <h3 className={s.title}>Useful Links</h3>
                <ul className={s.list}>
                    <li className={s.listitem}>
                        Home
                    </li>
                    <li className={s.listitem}>
                        Cart
                    </li>
                    <li className={s.listitem}>
                        Man Fashion
                    </li>
                    <li className={s.listitem}>
                        Woman Fashion
                    </li>
                    <li className={s.listitem}>
                        Accessories
                    </li>
                    <li className={s.listitem}>
                        Order Tracking
                    </li>
                    <li className={s.listitem}>
                        Wishlist
                    </li>
                    <li className={s.listitem}>
                        Wishlist
                    </li>
                    <li className={s.listitem}>
                        Terms
                    </li>
                </ul>

            </div>
            <div className={s.right}>
                <div className={s.title}>Contact</div>
                <div className={s.contactItem}><FiPhone className={s.contactIcon} />
                +1 234 34 456
                </div>
                <div className={s.contactItem}><FiMapPin className={s.contactIcon} />
                Lucknow, UP
                </div>
                <div className={s.contactItem}><FiMail className={s.contactIcon} />
                contact@anshu.com
                </div>
                {/* <img src="https://www.pngitem.com/pimgs/m/3-38170_phonepe-logo-png-phone-pe-transparent-png.png" alt="" className={s.payment} />
                <img src="https://www.pngitem.com/pimgs/m/3-38170_phonepe-logo-png-phone-pe-transparent-png.png" alt="" className={s.payment} /> */}
            </div>
        </div>
    )
}

export default Footer