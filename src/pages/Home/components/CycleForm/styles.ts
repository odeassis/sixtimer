import styled from "styled-components";

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