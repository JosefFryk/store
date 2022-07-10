import styled from "styled-components";

const Wrapper = styled.section`



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
h3 {
    font-size: 3.5rem;
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
    margin: auto;
    position: relative;
    height: 45rem;
    max-width: 1440px;
}
.about-text-mission {
    position: absolute;
    top: 10px;
    right: 120px;
    width: 25%;
    color: var(--clr-white);
}
.about-details-expands {
    height: 90vh;
    color: var(--clr-primary-11);
}

.about-details-expands p {
    font-size: 2rem;
}




`

export default Wrapper