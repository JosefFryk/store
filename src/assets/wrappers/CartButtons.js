import styled from 'styled-components'


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  
  .cart-btn {
    display: flex;
    align-items: center;
    color: var(--clr-primary-5);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    background: transparent;
    border-color: transparent;
    max-height: 34px;
    cursor: pointer;
    &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1rem;
      margin-left: 5px;
    }

  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
    &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
  }

`
export default Wrapper