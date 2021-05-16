import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
`;

const List = styled.ul`
`;

const Item = styled.li`
    display: flex;
    &:hover {
        background-color: orange;
    }
    border-bottom: 5px solid 
     ${props => (props.current ? "yellow" : "transparent")}
`;

export default withRouter(({location : {pathname}}) => (
    <Header>
        <List>
            <Item current = {pathname === "/"}>
                <Link to="/">Home</Link>
            </Item>
            <Item current = {pathname === "/Search"}>
                <Link to="/Search">Search</Link>
            </Item>
            <Item>
                <Link to="/TV">TV</Link>
            </Item>
        </List>
    </Header>
));
