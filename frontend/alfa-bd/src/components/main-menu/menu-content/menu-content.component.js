import React from 'react';
import './menu-content.styles.scss';

const MenuContent = ({ title }) => (
    <div className="menu-content">
        <div className="menu-content-title">
            <h2>{title}</h2>
        </div>
    </div>
);

export default MenuContent;