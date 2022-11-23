import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CycleContext } from "../../../../contexts/CycleContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function CycleForm() {
  const { register } = useFormContext();
  const { activeCycle } = useContext(CycleContext);
  return (
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
  );
}
