import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useContext } from "react";
import { CycleContext } from "../../contexts/CycleContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CycleContext);
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} Min.</td>
                  <td>
                    {formatDistanceToNow(cycle.startTask, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.completeAt && (
                      <Status statusColor="gree">Concluído</Status>
                    )}
                    {cycle.interruptCycle && (
                      <Status statusColor="red">Cancelada</Status>
                    )}
                    {!cycle.completeAt && !cycle.interruptCycle && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
