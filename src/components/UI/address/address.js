import React from 'react';

const address = (props) => (
    <ul className="list-unstyled mb-3">
        <li><i className="fas fa-map-marker-alt"></i><span className="text">{props.address}</span></li>
        <li><i className="fas fa-phone"></i><span className="text">{props.phone}</span></li>
        <li><i className="fas fa-envelope"></i><span className="text">{props.email}</span></li>
    </ul>
)

export default address;