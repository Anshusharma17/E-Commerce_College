import s from './register.module.css';

const Register = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h1 className={s.title}>Create an account</h1>
                <form action="" className={s.form}>
                    <input required type="text" className={s.input} placeholder="first name"/>
                    <input required type="text" className={s.input} placeholder="last name" />
                    <input required type="text" className={s.input} placeholder="username" />
                    <input required type="email" className={s.input} placeholder="email" />
                    <input required type="password" className={s.input} placeholder="password" />
                    <input required type="password" className={s.input} placeholder="confirm password" />
                    <span className={s.agreement}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quo eos amet nisi vitae dolores voluptates perferendis dignissimos obcaecati, deleniti cupiditate minus! Asperiores ea quas nulla eos rem, doloremque doloribus.</span>
                    <button className={s.btn}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Register