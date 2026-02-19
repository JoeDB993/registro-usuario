import { useState, useMemo } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { IFormData } from '../interfaces/IRegister'

const initialForm: IFormData = {
  username: '',
  email: '',
  password: ''
}

export const useRegisterForm = () => {
  const [values, setValues] = useState<IFormData>(initialForm)
  const [enviado, setEnviado] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const esValido = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return (
      values.username.trim().length >= 3 &&
      emailRegex.test(values.email) &&
      values.password.length >= 6
    )
  }, [values])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (esValido) {
      setSuccessMessage(`¡Registro exitoso! ¡Bienvenido, ${values.username}!`)
      setEnviado(true)
      setValues(initialForm)
    }
  }

  const handleReset = () => {
    setValues(initialForm)
    setEnviado(false)
    setSuccessMessage('')
  }

  return {
    formData: values,
    enviado,
    esValido,
    successMessage,
    handleInputChange,
    handleSubmit,
    handleReset
  }
}