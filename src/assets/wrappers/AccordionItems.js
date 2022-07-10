import styled from "styled-components";

const Wrapper = styled.section`
.button {
  font-size: 16px;
  background-color: #008593;
  color: #fff;
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8px;
  cursor: pointer;
  border: none;
}
.control {
  font-size: 20px;
}
.content {
  background-color: #f7f7f7;
  padding: 20px;
}
/* activate toggle */
.accordion_item.active .button {
  background-color: #105057;
}
.content_wrapper {
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
}

`

export default Wrapper