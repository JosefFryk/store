import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding-left: 2rem;
  padding-right: 2rem;
  .featured {
    margin: 3rem auto;
    display: grid;
    gap: 1rem;
    img {
      height: 225px;
      

    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
  }
  .btn:hover{
    color: var(--clr-primary-3);
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default Wrapper