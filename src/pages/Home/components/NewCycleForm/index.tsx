import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor=''>Vou trabalhar em</label>
      <TaskInput
        id='task'
        list='tasks'
        placeholder='De um nome para seu projeto'
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id='tasks'>
        <option value='Projeto 1' />
        <option value='Projeto 2' />
        <option value='Projeto 3' />
      </datalist>

      <label htmlFor=''>durante</label>
      <MinutesAmountInput
        type='number'
        id='minutesAmount'
        placeholder='00'
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
