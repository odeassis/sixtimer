import styled from "styled-components";

export const MessageErrorContainer = styled.div`
  //visibility: hidden;
  //max-height: 0;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;

  background: ${props => props.theme['gray-700']};
  border: 2px solid ${props => props.theme['red-500']};
  padding: 0.8rem;
  border-radius: 8px;

  gap: 1.5rem;

  svg {
    color: ${props => props.theme['red-500']}
  }

  span{
    color: ${props => props.theme["white"]}
  }

  span {
    font-size: 1.1rem;
  }

  &:first-child{
    margin-bottom: 0.75rem;
  }
`;