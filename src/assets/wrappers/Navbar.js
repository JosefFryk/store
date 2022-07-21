import styled from 'styled-components'

const Wrapper = styled.nav`
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    background-color: var(--clr-primary-4);
    padding: 2rem 5rem;
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
        gap: 15rem;
    }
    .right-top-box {
        display: flex;
        justify-content: flex-end;
    }
    /* .nav-toggle {
      display: none;
    } */

    .kosik-box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
    }
    @media (max-width: 576px) {
        padding: 0;


        // if more pages needed
        /* .nav-toggle {
            display: contents;
            background: transparent;
            border: transparent;
            color: var(--clr-primary-5);
            cursor: pointer;
            svg {
            font-size: 2rem;
            }
        } */

        .right-bottom-box{
            gap:5rem;
        }
    .logo-box {
        display: none;
        
    }
    
  }
 

    
`

export default Wrapper