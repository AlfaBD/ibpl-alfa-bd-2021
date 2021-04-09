import React from 'react';
import LargeMenu from '../../components/main-menu/large-menu/large-menu.component';
import SmallMenu from '../../components/main-menu/small-menu/small-menu.component';
import './main-page.styles.scss';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-page">
                <div className="large-menu-section">
                    <LargeMenu title="Escola"/>
                </div>
                <div className="small-menu-section">
                    <SmallMenu title="Aluno"/>
                    <SmallMenu title="Professores"/>
                </div>  
            </div>
        )
    }
}

export default MainPage;