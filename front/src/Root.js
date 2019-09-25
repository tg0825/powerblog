import React, {Fragment} from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyle.js';

import Header from './Header.js';
import Footer from './Footer.js';

const Button = styled.button`
background: red;
font-size: 30px;
border-radius: ${props => (props.round ? '10px' : '0')};
`;

const Root = () => {
    return (
        <Fragment>
            <GlobalStyle/>
            <div>
                <h3 className="title">hello</h3>
                <Header></Header>
                <Button round>button</Button>
                <Footer></Footer>
            </div>
        </Fragment>
    );
};

export default Root;