import { HistoryContainer, HistoryList, Status } from "./styles";

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar</td>
              <td>1:30</td>
              <td>08:00</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Correr</td>
              <td>0:45</td>
              <td>09:30</td>
              <td>
                <Status statusColor="red">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Trabalhar</td>
              <td>8:00</td>
              <td>10:15</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
