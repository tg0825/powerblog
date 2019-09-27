import React, {Fragment} from 'react';
import css from './css/style.css';
import styled from 'styled-components';
import GlobalStyle from './globalStyle.js';

import Header from './Header.js';
import Container from './Container';
import Footer from './Footer.js';

import Send from './Send.js';
import Receives from './Receives.js';

import {SampleProvider} from './contexts/sample';

const Button = styled.button`
background: red;
font-size: 30px;
border-radius: ${props => (props.round ? '10px' : '0')};
`;

const LargeButton = styled(Button)`
    font-size: 50px;
    padding: 20px;
`;

function Foo() {
    return (
        <div>test</div>
    )
}

class Bar extends React.Component
{
    render() {
        return (
            <div>bar</div>
        )
    }
}

const Root = () => {
    return (
        <SampleProvider>
            <GlobalStyle/>
            <div>
                <Foo></Foo>
                <Bar></Bar>
                <h3 className="title">hello</h3>
                <Header></Header>
                <div>
                    <Container/>
                </div>
                <Button round>button</Button>
                <LargeButton round>large button</LargeButton>
                <Footer></Footer>
                <div>
                    <Send></Send>
                    <div>
                        result
                        <div>
                            <Receives></Receives>
                        </div>
                    </div>
                </div>
            </div>
        </SampleProvider>
    );
};

export default Root;