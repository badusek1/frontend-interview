import React from 'react';

import './InfoCard.scss';
import { Col } from 'react-bootstrap';

function InfoCard(props) {

    return (
        <Col lg={4} className="info-card">
            {props.children}
        </Col>
    );

}

export default InfoCard;