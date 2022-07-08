
import styled from 'styled-components'

const Wrapper = styled.div`
   form {
        position: relative;
        width: 30rem;
        background: var(--clr-white);
        border-radius: var(--radius);
    }
    .form-control{
        display: flex;
        flex-direction: row;
        width: 30rem;
    }
    input, button {
        height: 2.7rem;
        font-family: var(--font-fam);
        border: 0;
        color: var(--crl-black);
        font-size: 1.5rem;
        width: 30rem;
    }
    input[type="search"] {
        width: 100%;
        background: var(--clr-primary-4);
        padding: 0 1.6rem;
        border-radius: var(--radius);
        appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
        transition: all var(--transition) var(--transition);
        transition-property: width, border-radius;
        z-index: 1;
        position: relative;
    }
    button {
        display: none; // prevent being able to tab to it
        position: absolute;
        top: 0;
        right: 0;
        width: 6rem;
        font-weight: bold;
        background: var(--clr-primary-3);
        border-radius: 0 var(--radius) var(--radius) 0;
    }
    input:not(:placeholder-shown) {
        border-radius: var(--radius) 0 0 var(--radius);
        width: calc(100% - 6rem);
        + button {
            display: block;
        }
        + .arrow-search-box {
            display: block;
        }
    }
    label {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
    }
    .arrow-search-box {
        display: none; // prevent being able to tab to it
        position: absolute;
        top: 0;
        right: 0;
        width: 6rem;
        font-weight: bold;
        background: var(--clr-green-dark);
        height: 100%;
        padding: 6px 27px;
    }


    

//screen readers
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }


    @media (max-width: 576px) {
        display: none;
  }
    



`

export default Wrapper

