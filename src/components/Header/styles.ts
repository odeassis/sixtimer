import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;


  >svg {
    color: ${props => props.theme["purple-300"]};
  }

  nav {
    display: flex;
    gap: 0.8rem;
  
    a { 
      width: 3rem;
      height: 3rem;
      display:flex ;
      align-items: center;
      justify-content:center;

      color: ${props => props.theme.white};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover{
        border-bottom: 3px solid ${props => props.theme["purple-500"]};
      }
      &.active{
        color: ${props => props.theme["purple-500"]};
      }
    }

  }

`;