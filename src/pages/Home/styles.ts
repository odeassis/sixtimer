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
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap:0.8rem;

  align-items: center;
  justify-content:center;
  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

`;

const InputStyle = styled.input`

  background: transparent;
  height: 2rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  color: ${props => props.theme["gray-300"]};
  font-size: 1.125rem;
  padding: 0 0.5rem;

  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme["green-500"]}
  }

  &::placeholder {
    color: ${props => props.theme["gray-500"]};
  }

`;

export const TaskInput = styled(InputStyle)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(InputStyle)`
  width: 4rem;
`;


export const CounterContainer = styled.div`
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme["gray-100"]};

  gap: 1rem;

  span {
    background: ${props => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;

  color: ${props => props.theme["green-500"]}
`;

export const StartCounterButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: none;

  background: ${props => props.theme["green-500"]};
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

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    background: ${props => props.theme["green-700"]};
  }
`;