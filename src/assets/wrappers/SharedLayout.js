import styled from 'styled-components'

const Wrapper = styled.div`
  .sidebar-box {
    display:flex;
    width:80px;

  }

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .dashboard-sidebar{
    width: 80px;
    height: calc(100vh - 50px);
    background-color: transparent;
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default Wrapper
