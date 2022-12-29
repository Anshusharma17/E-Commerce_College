import s from "./newsletter.module.css";
import { BiSend } from 'react-icons/bi';

const Newletter = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Newsletter</h1>
            <p className={s.desc}>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <div className={s.inpCon}>
                <input type="text" className={s.inp} placeholder="Your Email"/>
                <button className={s.btn}>
                    <BiSend />
                </button>
            </div>
        </div>
    )
}

export default Newletter