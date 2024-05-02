import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyle';

import Login from '../pages/Login';

import Project from '../pages/Project';
import Curriculum from '../pages/Curriculum';
import Member from '../pages/Member';
import Profile from '../pages/Profile';


const Container=styled.div``;
const Logo=styled.p``;
const NavigationBar=styled.div``;
const Element=styled.div``;
const ElementText=styled.p``;
const ElmentDiv=styled.div``;
const UserPhoto=styled.image``;
const LoginBtn=styled.button``
;

const Header=()=>{

    return(
        <>
            <Container>
                <Logo />
                <NavigationBar>
                    <Link to={'/project'} Element={<Project />}>
                        <Element>
                            <ElementText />
                            <ElmentDiv />
                        </Element>
                    </Link>
                    <Link to={'/curriculum'} Element={<Curriculum />}>
                        <Element>
                            <ElementText />
                            <ElmentDiv />
                        </Element>
                    </Link>
                    <Link to={'/member'} Element={<Member />}>
                        <Element>
                            <ElementText />
                            <ElmentDiv />
                        </Element>
                    </Link>
                    <Link to={'/profile'} Element={<Profile />}>
                        <Element>
                            <ElementText />
                            <ElmentDiv />
                        </Element>
                    </Link>
                </NavigationBar>
                <UserPhoto />
                <Link to={'/login'} Element={<Login />}>
                    <LoginBtn />
                </Link>
            </Container>
        </>
    )
}

export default Header;