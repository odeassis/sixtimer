import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CounterContainer,
  ErrorContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCounterButton,
  TaskInput,
} from "./styles";
import { MessageError } from "../../components/MessageError";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(3, "A tarefa deve ter no mínimo 3 letras."),
  minutesAmount: zod
    .number()
    .min(5, "No mínimo 5 minutos.")
    .max(60, "No máximo 60 minutos.")
    .multipleOf(5, "Somente múltiplos de 5 (5, 10, 15 ...)"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, formState, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle() {
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para sua tarefa"
            {...register("task")}
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
            {...register("minutesAmount", {
              valueAsNumber: true,
            })}
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

        <StartCounterButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Iniciar
        </StartCounterButton>
      </form>
      <ErrorContainer>
        {Object.entries(formState.errors).map((key, value) => (
          <MessageError
            key={key[1]?.message?.toString()}
            message={key[1]?.message?.toString()}
          />
        ))}
      </ErrorContainer>
    </HomeContainer>
  );
}
