import { Cycle } from "../../contexts/cycles";
import { ActionType } from "./reducer";

export function createNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionType.CREATE_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}
export function markCurrentCycleAsFinishedAction() {
    return {
        type: ActionType.FINISHED_CYCLE,
    }
}
export function interrupedCurrentCycleAction() {
    return {
        type: ActionType.INTERRUPED_CYCLE,
    }
}