import styled from 'styled-components'

const Wrapper = styled.nav`
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    .logo{
        display:flex;
        align-items:center;
        width:100px;
    }
    .logo-text {
    display: none;
    margin: 0;
    }
    .right-bottom-box {
        display:flex;
        flex-direction: row;
    }
    .right-top-box {
        display: flex;
        justify-content: flex-end;
    }

    
`

export default Wrapper