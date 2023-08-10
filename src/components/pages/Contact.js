import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div>
            <h1 className={styles.contato}>Contato</h1>
            <div className={styles.contactContainer}>
                <div className={styles.contactBox}>
                    <FaPhone className={styles.icon} />
                    <br></br>
                    <p><span className={styles.span}>Telefone:</span><br></br>(62) 0000-0000</p>
                </div>
                <div className={styles.contactBox}>
                    <FaEnvelope className={styles.icon} />
                    <br></br>
                    <p><span className={styles.span}>Email:</span><br></br> box@gmail.com</p>
                </div>
                <div className={styles.contactBox}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <br></br>
                    <p><span className={styles.span}>Endereço:</span><br></br> Rua Exemplo, 123</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
