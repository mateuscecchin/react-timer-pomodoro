import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";



export function NewCycleForm({ cycleActive }: any) {
    const { register } = useFormContext();
    return (
        <FormContainer>
            <span>Vou trabalhar em</span>
            <TaskInput
                id="task"
                placeholder="Dê um nome para seu projeto"
                disabled={!!cycleActive}
                {...register("task")}
            />
            <span>durante</span>
            <MinutesAmountInput
                id="minutesAmount"
                type="number"
                placeholder="00"
                min={1}
                disabled={!!cycleActive}
                max={60}
                {...register("minutesAmount", {
                    valueAsNumber: true,
                })}
            />
            <span>minutos.</span>
        </FormContainer>
    )
}