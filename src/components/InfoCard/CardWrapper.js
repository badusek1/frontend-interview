import React from 'react';

import { Row } from 'react-bootstrap';

import './CardWrapper.scss';

function CardWrapper(props) {

    return (
        <Row className="card-wrapper">
            {props.children}
        </Row>
    );

}

export default CardWrapper;