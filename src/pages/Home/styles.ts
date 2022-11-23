import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  form {
    display: flex;
    flex-direction: column;
    align-items:center;

    gap: 3.5rem;
  }
`


export const BaseCounterButton = styled.button`
  width: 100%;
  height: 3.5rem;
  border: none;


  color: ${props => props.theme["gray-100"]};

  font-size: 1.121rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content:center;
  gap: 1rem;

  border-radius: 8px;
  cursor: pointer;

  transition: background 0.5s;

  
`;

export const StartCounterButton = styled(BaseCounterButton)`
  background: ${props => props.theme["green-500"]};

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    background: ${props => props.theme["green-700"]};
  }
`;
export const StopCounterButton = styled(BaseCounterButton)`
  background: ${props => props.theme["red-500"]};
  
  &:hover{
    background: ${props => props.theme["red-700"]};
  }
`;

export const ErrorContainer = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  margin-top: 1rem;
`;