import styled from "styled-components";

const Wrapper = styled.section`
  

.button {
  font-size: 2rem;
  text-align: left;
  font-weight: 600;
  width: 50%;
  align-items: center;
  padding: 18px 8px;
  cursor: pointer;
  border: none;
  color: var(--clr-primary-11);
  background-color: transparent;
}
.button-inner-text {
 display: grid;
 grid-template-columns: 80% auto;
}

.control {
  font-size: 1.5rem;
  justify-self: end;
}
.content {
  padding: 20px;
  width: 80%;

}
/* activate toggle */
.accordion_item.active .button {
}
.content_wrapper {
  display: flex;
}

`

export default Wrapper