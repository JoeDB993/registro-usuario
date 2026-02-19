import type { ChangeEvent } from 'react'

export interface InputProps {
  name: string
  type: 'text' | 'email' | 'password'
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
}