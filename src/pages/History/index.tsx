import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { CycleContext } from "../../contexts/cycles";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    const { cycles } = useContext(CycleContext)
    return <HistoryContainer>
        <h1>Meu historico</h1>
        <HistoryList>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {cycles.map(cycle => {
                        return <tr key={cycle.id}>
                            <td>{cycle.task}</td>
                            <td>{cycle.minutesAmount} minutos</td>
                            <td>{formatDistanceToNow(new Date(cycle.startDate))}</td>
                            <td>
                                {cycle.finishedDate && <Status statusColor="green">Concluido</Status>}
                                {cycle.interrupedDate && <Status statusColor="red">Interrompido</Status>}
                                {!cycle.interrupedDate && !cycle.finishedDate && <Status statusColor="yellow">Em andamento</Status>}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>
}