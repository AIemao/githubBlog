import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
