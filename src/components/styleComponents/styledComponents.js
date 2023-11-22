import styled from "styled-components";

export const MainComponent = styled.div`
  display: flex;
  justify-content: center;
`;
export const Home = styled.div`
  // display: flex;
  // justify-content: center;
`;

export const MovieContainer = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    align-items: center; /* Center items vertically */
    justify-items: center; /* Center items horizontally */
    display: grid;
  }

  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;

export const MovieItem = styled.div`
  color: white;
  border: solid;
  border-color: white;
  width: 10rem;
  height: 10rem;
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 90%;
  }

  & .movieData {
    @media (max-width: 768px) {
      // padding: 0.5rem;
      margin: 1rem;
      max-wi
    }
  }

  p {
    visibility: hidden
    word-wrap: break-word;
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
   
    word-wrap: break-word;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1 {
    visibility: hidden
    word-wrap: break-word;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 768px) {
      display: block; /* Show h1 on small screens */
      position: relative;
    }

    @media (min-width: 769px) {
      display: none; /* Hide h1 on large screens */
      position: absolute;
    }
    
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
 

  & .posterContainer {
    min-width: 9rem; 
    height: 75%;

    @media (max-width: 768px) {
      width: 8.1rem; 
      height: 100%;
    }
  }

  div {
    height: auto;
  }

  .title {
    max-width: 100%;
    max-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal; /* Change from nowrap to normal to allow text wrapping */
  }
`;
export const NavigationContainer = styled.div`
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    /* Medium Screens (Tablets) */
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }

  @media (max-width: 767px) {
    /* Small Screens (Mobile) */
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
`;

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
`;

export const Button = styled.button`

  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  wi &:hover {
    background-color: #456580;
  }
  svg {
    width: 1rem; /* Set width to your desired dimension */
    height: 1rem; /* Set height to your desired dimension */
    fill: white !important; /* Set fill color to your desired color */
    margin-right: 1rem; /* Adjust spacing between the icon and text */
  }
  @media (max-width: 768px) {
    /* Hide text on small screens */
    span {
      display: none;
    }
`;
