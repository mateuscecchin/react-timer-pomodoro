import { HandPalm, Play } from "phosphor-react";
import {
    HomeContainer,
    InteruppedTimerButton,
    StartTimerButton,
} from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { createContext, useContext, useEffect, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Timer } from "./components/Timer";
import { CycleContext } from "../../contexts/cycles";



const newCycleFormScheme = zod.object({
    minutesAmount: zod
        .number()
        .min(1, "O ciclo deve ter no minimo 5 minuto")
        .max(60, "O ciclo só pode ter 60 minutos"),
    task: zod.string().min(1, "Adicione uma tarefa"),
});

export function Home() {
    const { activeCycle, createNewCycle, interrupedCycle } = useContext(CycleContext);
    const newCycleForm = useForm({
        resolver: zodResolver(newCycleFormScheme),
    });
    const { reset, handleSubmit, watch } = newCycleForm
    const taskValue = watch("task");
    const isSubmitDisabled = !taskValue;


    function handleCreateNewCycle(data: any) {
        createNewCycle(data)
        reset()
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Timer />
                {!activeCycle ?
                    <StartTimerButton disabled={isSubmitDisabled} type="submit">
                        <Play /> Começar
                    </StartTimerButton> :
                    <InteruppedTimerButton type="button" onClick={interrupedCycle}>
                        <HandPalm /> Interromper
                    </InteruppedTimerButton>
                }
            </form>
        </HomeContainer>
    );
}
