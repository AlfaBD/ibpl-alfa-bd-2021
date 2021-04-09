import React from 'react';
import MenuContent from '../menu-content/menu-content.component';
import './small-menu.styles.scss';

const SmallMenu = ({ title }) => (
    <div className="small-menu">
        <MenuContent title={title} />
    </div>
);

export default SmallMenu;