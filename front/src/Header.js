import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
background: green;
`;

const Search = styled.input`
    font-size: 20px;
`;

const Link = styled.a``;

const Root = () => {
    return (
        <div>
            <Header>i am header</Header>
            <Search type="text" placeholder="search now!"/>
            <Link href="#">i am link :) </Link>
            <Link href="#">i am link :) </Link>
            <Link href="#">i am link :) </Link>
            <Link href="#">i am link :) </Link>
        </div>
    );
};

export default Root;