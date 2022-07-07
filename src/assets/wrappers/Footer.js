import styled from "styled-components";

const Wrapper = styled.section`
    background: var(--clr-black);
    height: var(--footer-height);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 5rem;
    padding: 10px 0;

    h4 {
        color: var(--clr-primary-3);
        font-size: var(--small-text);

    }
    h2 {
        color: var(--clr-white);
        font-size: var(--normal-text);
    }
    .footer-icons{
        width: 140px;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }



`

export default Wrapper