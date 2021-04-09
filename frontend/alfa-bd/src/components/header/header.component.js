import React from 'react';
import HeaderMenuItem from '../header-menu-item/header-menu-item.component';
import './header.styles.scss';

class Header extends React.Component {

constructor(props) {
    super(props);
}

render() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>Alfa BD</h1>
            </div>
            <div className="header-menu">
                <HeaderMenuItem title="Escola"/>
                <HeaderMenuItem title="Aluno"/>
                <HeaderMenuItem title="Professor"/>
            </div>
            <div className="header-profile">
            </div>
        </div>
        );
    }
}

export default Header; 