import { Cycle } from "../../contexts/cycles";

interface CycleState {
    cycles: Cycle[]
    cycleActive?: string;
}

export enum ActionType {
    CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
    INTERRUPED_CYCLE = "INTERRUPED_CYCLE",
    FINISHED_CYCLE = "FINISHED_CYCLE"
}

export function cyclesReducer(state: CycleState, action: any) {
    switch (action.type) {
        case ActionType.CREATE_NEW_CYCLE:
            return { cycles: [...state.cycles, action.payload.newCycle], cycleActive: action.payload.newCycle.id }
        case ActionType.INTERRUPED_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle => {
                    if (cycle.id == state.cycleActive) {
                        return { ...cycle, interrupedDate: new Date() }
                    } else { return cycle }
                }),
                cycleActive: ""
            }
        case ActionType.FINISHED_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle => {
                    if (cycle.id == state.cycleActive) {
                        return { ...cycle, finishedDate: new Date() }
                    } else { return cycle }
                }),
                cycleActive: ""
            }
        default: return state
    }
}