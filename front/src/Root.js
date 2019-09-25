import React from 'react';
import './style.scss';
import styled from 'styled-components';

const Button = styled.button`
background: red;
font-size: 30px;
`;

const Root = () => {
    return (
        <div>
            <h3 className="title">hello</h3>
            <Button>button</Button>
        </div>
    );
};

export default Root;