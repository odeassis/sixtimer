import { differenceInSeconds } from "date-fns";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducer/cycle/action";
import { Cycle, cycleReducer } from "../reducer/cycle/reducer";

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
  interruptCurrentCycle: () => void;
  markCurrentCycleAsFinished: () => void;
  secondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextType);

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycleState, dispatch] = useReducer(
    cycleReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateJSON = localStorage.getItem("@timer:cycle-state-1.0.0");

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON);
      }
    }
  );
  const { activeCycleId, cycles } = cycleState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startTask));
    }
    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cycleState);

    localStorage.setItem("@timer:cycle-state-1.0.0", stateJSON);
  }, [cycleState]);

  function createNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startTask: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    // setCycles((state) => [...state, newCycle]);
    // setActiveCycleId(id);
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
    // setCycles((cycles) =>
    //   cycles.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptCycle: new Date() };
    //     } else {
    //       return cycle;
    //     }
    //   })
    // );
    // setActiveCycleId("");
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, completeAt: new Date() };
    //     } else {
    //       return cycle;
    //     }
    //   })
    // );
  }

  function secondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        cycles,
        createNewCycle,
        interruptCurrentCycle,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        secondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
