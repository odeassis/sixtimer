import { Play } from "phosphor-react";
import {
  CounterContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCounterButton,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para sua tarefa"
          />

          <datalist id="task-suggestions">
            <option value="Task 1" />
            <option value="Uma grande Task" />
            <option value="Task 3" />
            <option value="Task 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            max={60}
            min={5}
            step={5}
            placeholder="00"
          />

          <span>minutos</span>
        </FormContainer>
        <CounterContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CounterContainer>

        <StartCounterButton type="submit" disabled>
          <Play size={24} />
          Iniciar
        </StartCounterButton>
      </form>
    </HomeContainer>
  );
}
