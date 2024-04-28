import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { z } from 'zod'
import { useState } from 'react'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser no mínimo de 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo de 60 minutos'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export const NewCycleForm = () => {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles(state => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setActiveCycleId(null)
    setCycles(state =>
      state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          }
        } else {
          return cycle
        }
      })
    )
  }

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
