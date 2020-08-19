import React, {useState} from 'react';

import arrow from '../../assets/icons/arrow-right.svg';

import './ContactForm.scss';
import check from '../../assets/icons/check.svg';

const FORM_DATA = 'formData';

const CATEGORIES = {
    default: 'dafault',
    web: 'web',
    mobile: 'mobile',
    desktop: 'desktop'
}

// eslint-disable-next-line
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function ContactForm() {

    const storage = window.localStorage;
    let formData = storage.getItem(FORM_DATA);
    formData = formData ? JSON.parse(formData) : null;

    const [email, setEmail] = useState(formData && formData.email ? formData.email : '');
    const [category, setCategory] = useState(formData && formData.category ? formData.category : CATEGORIES.default);
    const [text, setText] = useState(formData && formData.text ? formData.text : '');
    const [agree, setAgree] = useState(formData && formData.agree ? formData.agree : false);

    const sendForm = (event) => {
        
        event.preventDefault();

        setText((prevState) => {
            return prevState.trim();
        });

        // check mail
        if (emailRegex.test(email.toLowerCase())) {

            // check category
            if (category !== CATEGORIES.default) {
                
                // check text
                if (text.trim() !== '') {

                    // check agree
                    if (agree) {

                        storage.setItem(FORM_DATA, JSON.stringify({
                            email,
                            category,
                            text,
                            agree
                        }));
                        window.alert('Správa odoslaná');

                    } else {
                        window.alert('Musíte súhlasiť');
                    }
            

                } else {
                    window.alert('Správa nesmie byť prázdna');
                }
            } else {
                window.alert('Vyberte kategóriu');
            }


        } else {
            window.alert('Nesprávny email');
        }

    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changeCategory = (event) => {
        setCategory(event.target.value);
    }

    const changeText = (event) => {
        setText(event.target.value);
    }

    const changeAgree = () => {
        setAgree((prevState) => {
            return !prevState;
        });
    }

    return (
        <form className="contact-form" onSubmit={sendForm}>
            <input type="text" name="email" placeholder="Email" onChange={changeEmail} value={email} />
            <select name="category" onChange={changeCategory} value={category}>
                <option value={CATEGORIES.default}>Kategória</option>
                <option value={CATEGORIES.web}>Webové aplikácie</option>
                <option value={CATEGORIES.mobile}>Mobilné aplikácie</option>
                <option value={CATEGORIES.desktop}>Desktop aplikácie</option>
            </select>
            <textarea rows="1" name="text" placeholder="Správa" onChange={changeText} value={text} />
            <div className="check-wrap">
                <input type="checkbox" id="agree" name="agree" onChange={changeAgree} value={agree} />
                <div onClick={changeAgree} className={agree ? "checkbox true" : "checkbox false"}>
                    <img src={check} alt="Áno" />
                </div>
                <label htmlFor="agree">Odoslaním správy súhlasíte s tým, že vás budeme kontaktovať.</label>
            </div>
            <button onClick={sendForm}>Odoslať<img src={arrow} alt="Šípka v pravo" /></button>
        </form>
    );

}

export default ContactForm;