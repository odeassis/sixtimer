import styled from "styled-components";

export const MessageErrorContainer = styled.div`
  //visibility: hidden;
  //max-height: 0;
  display: flex;
  flex: 1;
  align-items: center;


  gap: 1.5rem;

  svg, span{
    color: ${props => props.theme["red-500"]}
  }

  span {
    font-size: 1.1rem;
  }

  &:disabled {

  }
`;