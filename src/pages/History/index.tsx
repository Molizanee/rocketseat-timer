import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export const History = () => {
  const { cycles } = useContext(CyclesContext)
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
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishedDate ? (
                    <Status statusColor='green'>Concluído</Status>
                  ) : cycle.interruptedDate ? (
                    <Status statusColor='red'>Interrompido</Status>
                  ) : (
                    <Status statusColor='yellow'>Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
