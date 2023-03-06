import { differenceInSeconds } from "date-fns";
import { createContext, PropsWithChildren, useEffect, useReducer, useState } from "react";
import { createNewCycleAction, interrupedCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { ActionType, cyclesReducer } from "../reducers/cycles/reducer";

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interrupedDate?: Date;
    finishedDate?: Date;
}

interface CycleContextType {
    cycles: Cycle[];
    activeCycle?: Cycle;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setAmountSecondsPassed: (seconds: number) => void;
    createNewCycle: ({ task, minutesAmount }: any) => void;
    interrupedCycle: () => void;
}


export const CycleContext = createContext({} as CycleContextType);

export function CycleContextProvider({ children }: PropsWithChildren) {
    const [cycleState, dispacth] = useReducer(cyclesReducer, {
        cycles: [],
        cycleActive: ""
    },
        (initialState) => {
            const parsedCycle = localStorage.getItem('@ignite-timer:cycles-state-1.0.0',)
            if (parsedCycle) {
                return JSON.parse(parsedCycle)
            }
            return initialState
        }
    )
    const { cycles, cycleActive } = cycleState
    const activeCycle = cycles.find(e => e.id == cycleActive)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        const differenceDate = differenceInSeconds(new Date, new Date(activeCycle.startDate))
        if (cycleState) {
            return differenceDate
        }

        return 0
    })


    useEffect(() => {
        const cyclesJSON = JSON.stringify(cycleState)
        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', cyclesJSON)
    }, [cycleState])

    function markCurrentCycleAsFinished() {
        dispacth(markCurrentCycleAsFinishedAction())
    }

    function handleCreateNewCycle({ task, minutesAmount }: any) {
        const id = String(new Date().getTime());
        const newCycle: Cycle = {
            id,
            task,
            minutesAmount,
            startDate: new Date()
        };
        dispacth(createNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    function handleInterrupedCycle() {
        dispacth(interrupedCurrentCycleAction())
    }

    return (
        <CycleContext.Provider value={{ cycles, activeCycle, amountSecondsPassed, markCurrentCycleAsFinished, setAmountSecondsPassed, createNewCycle: handleCreateNewCycle, interrupedCycle: handleInterrupedCycle }}>
            {children}
        </CycleContext.Provider>
    )
}