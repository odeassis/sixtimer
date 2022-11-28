import { ActionTypes } from "./action";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startTask: Date;
  interruptCycle?: Date;
  completeAt?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

interface Action {
  type: ActionTypes,
  payload?: any,
}

export function cycleReducer(state: CycleState, action: Action): CycleState {
  switch (action.type)
  {
    case ActionTypes.ADD_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload],
        activeCycleId: action.payload.id,
      }
    }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId)
          {
            return { ...cycle, interruptCycle: new Date() };
          } else
          {
            return cycle;
          }
        }),
        activeCycleId: null,
      }
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId)
          {
            return { ...cycle, completeAt: new Date() };
          } else
          {
            return cycle;
          }
        }),
        activeCycleId: null,
      }
    }
    default: return state;
  }
}