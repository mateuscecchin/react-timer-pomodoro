import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CycleContext } from "../../../../contexts/cycles";
import { Divider, TimerContainer } from "./styles";

export function Timer() {
    const { activeCycle, amountSecondsPassed, markCurrentCycleAsFinished, setAmountSecondsPassed } = useContext(CycleContext);
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {
        let interval: any
        if (activeCycle) {
            if (amountSecondsPassed > totalSeconds) {
                markCurrentCycleAsFinished()
                clearInterval(interval)
            } else {
                interval = setInterval(() => {
                    setAmountSecondsPassed(differenceInSeconds(new Date, new Date(activeCycle.startDate)))
                }, 1000)
            }
        }
        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, amountSecondsPassed, totalSeconds, markCurrentCycleAsFinished])


    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, "0")
    const seconds = String(secondsAmount).padStart(2, "0")

    useEffect(() => {
        document.title = `${minutes}:${seconds}`
    }, [minutes, seconds])

    return (

        <TimerContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Divider>:</Divider>
            <span>{[seconds[0]]}</span>
            <span>{[seconds[1]]}</span>
        </TimerContainer>
    )
}