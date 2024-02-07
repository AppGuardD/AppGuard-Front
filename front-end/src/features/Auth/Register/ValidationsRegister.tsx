export const isValidEmail = (value: string): string | null => {
  const emailRegex = /^\S+@\S+$/i
  return emailRegex.test(value)
    ? null
    : "Por favor, ingrese un correo electrónico válido."
}

export const isValidPassword = (value: string): string | null => {
  if (value.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres."
  }

  const hasNumber = /\d/.test(value)
  const hasUppercase = /[A-Z]/.test(value)

  if (!hasNumber || !hasUppercase) {
    return "La contraseña debe contener al menos un número y una mayúscula."
  }

  return null
}

export const isValidUsername = (value: string): string | null => {
  if (value.length < 7 || value.length > 11) {
    return "El nombre de usuario debe tener entre 7 y 11 caracteres."
  }

  return null
}
