import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 100px;
width: 80px;
  height: calc(100vh - 50px);
  background-color: transparent;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
   
  }
  li{
    text-decoration:none;
  }
  a {
    padding: 5px;
    border-radius: 5px;
    color: ;
    position: relative;
    display: flex;
    
    &:hover {
      background-color: blue;
    }
    span {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 3px;
      background-color: orange;
      color: white;
      border-radius: 5px;
      position: absolute;
      top: 5px;
      left: 45px;
      z-index: 10;
      
    }
  }
  @media only screen and (max-width: 996px) {
    display: none;
  }
`;

export default Wrapper