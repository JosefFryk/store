import styled from 'styled-components'

const Wrapper = styled.nav`
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    


`

export default Wrapper