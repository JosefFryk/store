import styled from 'styled-components'

const Wrapper = styled.section`
  border-bottom: 2px solid var(--clr-primary-4);
  width: 100%;
  min-height: 14vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-5);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default Wrapper