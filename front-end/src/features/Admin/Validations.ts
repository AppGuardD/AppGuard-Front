export const isValidDangerousness = (value: number): string | null => {
  if (isNaN(value)) {
    return "La peligrosidad debe ser un número."
  }

  if (value < 1 || value > 3) {
    return "La peligrosidad debe estar entre 1 y 3."
  }

  return null // La validación pasó correctamente
}

export const isValidZone = (value: string): string | null => {
  if (value.trim() === "") {
    return "La zona no puede estar vacía."
  }
  return null
}
export const isValidQualification = (value: number): string | null => {
  if (isNaN(value)) {
    return "La calificación debe ser un número."
  }

  if (value < 1 || value > 5) {
    return "La calificación debe estar entre 1 y 5."
  }

  return null
}

export const isValidImage = (value: string): string | null => {
  if (typeof value !== "string") {
    return "La URL de la imagen debe ser una cadena."
  }

  return null // La validación pasó correctamente
}
