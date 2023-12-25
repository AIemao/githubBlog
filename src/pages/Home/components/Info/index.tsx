import { ReactNode } from 'react'
import { IconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: ReactNode
}

export function Info({ text, icon }: InfoIconProps) {
  return (
    <IconContainer>
      <span>{icon}</span>
      <p>{text}</p>
    </IconContainer>
  )
}
