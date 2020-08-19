import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import CardWrapper from '../components/InfoCard/CardWrapper';
import InfoCard from '../components/InfoCard/InfoCard';

import { Container } from 'react-bootstrap';

import phone from '../assets/icons/phone.svg'; 
import envelope from '../assets/icons/envelope.svg';
import dialogue from '../assets/icons/dialogue.svg';
import './page.scss';

function ContactPage() {

    return (
        <Container className="page">
            <h1>KONTAKT</h1>
            <p>V prípade nejasností Vám radi poradíme na e-mailovej adrese <a href="mailto:elektromobilita@zse.sk">elektromobilita@zse.sk</a> alebo na Zákazníckej linke <a href="tel:0800 555 800">0800 555 800</a> dostupnej 24/7.</p>
            <ContactForm />
            <CardWrapper>
                <InfoCard>
                    <h2>adresa</h2>
                    <p>
                        Západoslovenská energetika, a.s. (ZSE)<br/>
                        Čulenova 6<br/>
                        816 47 Bratislava
                    </p>
                </InfoCard>
                <InfoCard>
                    <h2>Messenger a E-mail</h2>
                    <ul>
                        <li><a href="/"><img src={dialogue} alt="Správa" />Napíšte nám</a></li>
                        <li><a href="mailto:kontakt@zse.sk"><img src={envelope} alt="Obálka" />kontakt@zse.sk</a></li>
                    </ul>
                </InfoCard>
                <InfoCard>
                    <h2>TelefÓn</h2>
                    <a href="tel:0800 555 800"><img src={phone} alt="Telefón" />0800 555 800</a>
                </InfoCard>
            </CardWrapper>
        </Container>
        
    );

}

export default ContactPage;