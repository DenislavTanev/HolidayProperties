import React from 'react';
import { Link } from 'react-router-dom';

const FooterSectionItem = ({ link, title }) => {

    return (
        <li className="item-list-a">
            <i className="bi bi-chevron-right"></i> <Link to={link}>{title}</Link>
        </li>
    );
}

export default FooterSectionItem;
