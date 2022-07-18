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
    display: block;
    height: 100vh;
    color: var(--clr-primary-11);
    padding-left: 50px;
    padding-right: 50px;   
}
@media (max-width:576px){
    h3{
        margin: 2px;
        line-height: 1;
    }
    .about-title-box h1{
        padding-left: 4rem;
        font-size: 5rem;
    }
    .about-info-box p {
        font-size: 1.2rem;
    }
    .about-text-mission{
        display: flex;
        flex-direction: row;
        top:0px;
        left: 10px;
        gap: 1rem;
    }
    .about-text-mission p {
        height: 200px;
        width: 200px;
        line-height: 1;
    }
}
`

export default Wrapper