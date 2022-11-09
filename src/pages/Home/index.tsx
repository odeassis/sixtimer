import { Play } from "phosphor-react";
import {
  CounterContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="text" id="minutesAmount" />

          <span>minutos</span>
        </FormContainer>
        <CounterContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CounterContainer>

        <button type="submit">
          <Play size={24} />
          Iniciar
        </button>
      </form>
    </HomeContainer>
  );
}
