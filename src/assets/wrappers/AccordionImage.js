import styled from "styled-components";


const Wrapper = styled.section `
 margin-top: 6rem;


.content-img-box{
  position: absolute;
  visibility: hidden;
  transition: all .3s ease;
}
.content-img-box.active{
 visibility: visible;
}
img {
    max-width: 100%;
    max-height: 700px;
}

`

export default Wrapper