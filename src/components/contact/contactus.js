import React from 'react'
import emailjs from 'emailjs-com'
import './contactus.css'

export default function Contactus(){
    const onSubmit=(e)=>{
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('gmail', 'template_pyhznbh', e.target, 'HMgL6FsMr91-Vm5X9')
        .then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        }
    return(
        <div className="email">
             <form className="formdesign" onSubmit = {onSubmit}>
                <ul type="none">
                    <li><p>Your Name:</p></li>
                    <li>
                    <input name='name' type="text" placeholder="Name…" className="form__input" />
                    </li>
                    <li>
                    <p>Subject:</p>
                    </li>
                    <li><input name='subject' type="text" placeholder="Subject…" className="form__input" /></li>
                    <li><p>Your Message:</p></li>
                    <li><textarea name='message' type="text" placeholder="Your Message…" className="form__input-message" ></textarea></li>
                    <li><button className="btn btn-primary">Send Message</button></li>
                </ul>    
            </form>
        </div>
    );
}