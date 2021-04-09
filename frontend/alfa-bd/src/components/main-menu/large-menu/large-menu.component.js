import React from 'react';
import MenuContent from '../menu-content/menu-content.component';
import './large-menu.styles.scss';

const LargeMenu = ({ title }) => (
    <div className="large-menu">
        <MenuContent title={title} />
    </div>
);

export default LargeMenu;