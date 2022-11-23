import { createContext, ReactNode, useEffect, useState } from "react";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startTask: Date;
  interruptCycle?: Date;
  completeAt?: Date;
}

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

interface CycleContextType {
  activeCycle: Cycle | undefined;
  cycles: Cycle[];
  amountSecondsPassed: number;
  createNewCycle: (data: NewCycleFormData) => void;
  stopCycle: () => void;
  completeCycle: () => void;
  secondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextType);

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState("");
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function createNewCycle(data: NewCycleFormData) {
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
  }

  function stopCycle() {
    setCycles((cycles) =>
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

  function completeCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, completeAt: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function secondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        cycles,
        createNewCycle,
        stopCycle,
        amountSecondsPassed,
        completeCycle,
        secondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
