import styled from 'styled-components'

const baseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${props => props.theme['green-500']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }
`

export const TaskInput = styled(baseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(baseInput)`
  width: 4rem;
`

export const FormContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
