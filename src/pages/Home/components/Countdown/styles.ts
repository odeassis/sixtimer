import styled from "styled-components";

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