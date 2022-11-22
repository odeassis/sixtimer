import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

import {
  CounterContainer,
  ErrorContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCounterButton,
  StopCounterButton,
  TaskInput,
} from "./styles";
import { MessageError } from "../../components/MessageError";
import { number, string } from "zod";
import { useEffect, useState } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(3, "A tarefa deve ter no mínimo 3 letras."),
  minutesAmount: zod
    .number()
    .min(5, "No mínimo 5 minutos.")
    .max(60, "No máximo 60 minutos.")
    .multipleOf(5, "Somente múltiplos de 5 (5, 10, 15 ...)"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startTask: Date;
  interruptCycle?: Date;
}

export function Home() {
  const { register, handleSubmit, watch, formState, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState("");
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startTask: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  }

  function handleStopCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptCycle: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId("");
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startTask)
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle]);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

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
            disabled={!!activeCycle}
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
            disabled={!!activeCycle}
            {...register("minutesAmount", {
              valueAsNumber: true,
            })}
          />

          <span>minutos</span>
        </FormContainer>
        <CounterContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CounterContainer>

        {activeCycle ? (
          <StopCounterButton onClick={handleStopCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCounterButton>
        ) : (
          <StartCounterButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Iniciar
          </StartCounterButton>
        )}
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
