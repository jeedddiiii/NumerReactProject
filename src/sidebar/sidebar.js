import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
    
 const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <Nav>
                <NavIcon to='#'>
                    <Fa.FaBars />
                </NavIcon>
            </Nav>
            <SidebarNav>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <Ai.AiOutlineClose />
                    </NavIcon>
                </SidebarWrap>
            </SidebarNav>
        </div>
    )

}
export default Sidebar;