import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

import {
  ErrorContainer,
  HomeContainer,
  StartCounterButton,
  StopCounterButton,
} from "./styles";
import { MessageError } from "../../components/MessageError";
import { number, string } from "zod";
import { useContext, useEffect, useState } from "react";
import { CycleForm } from "./components/CycleForm";
import { Countdown } from "./components/Countdown";
import { CycleContext } from "../../contexts/CycleContext";

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
  const { activeCycle, createNewCycle, stopCycle } = useContext(CycleContext);

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, formState } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <CycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCounterButton onClick={stopCycle} type="button">
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
