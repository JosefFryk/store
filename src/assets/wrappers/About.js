import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;

.about-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30rem;
    border-bottom: 2px solid var(--clr-primary-11);
    color: var(--clr-primary-11);
}

h1, h3, p {
    font-family:  'Edu TAS Beginner',sans-serif;
}

h1 {
    font-size: 6rem;
    font-weight: 600;
}

.about-info-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;
    color: var(--clr-primary-11);
    
}
.about-info-box p {
    width: 45%;
    font-size: 2rem;
}
.about-bg-mission {
   
}





`

export default Wrapper