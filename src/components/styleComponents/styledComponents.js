import styled from "styled-components";

export const MovieContainer = styled.div`
  background-color: black;

  display: grid;
  //grid-template-rows: 4rem 1fr;

  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;

export const MovieItem = styled.div`
  color: white;
  border: solid;
  border-color: white;
  width: 11rem;
  height: 10rem;
`;
export const NavigationContainer = styled.div`
  background-color: #121212;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
`;

export const MenuButtons = styled.div`
  display: flex;

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
