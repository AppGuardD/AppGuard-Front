import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  isValidZone,
  isValidDangerousness,
  isValidImage,
  isValidQualification,
} from "../../components/Validations/Validations"

interface MangrulloFormData {
  zone: string
  dangerousness: number
  state: string
  image: string
  qualification: number
}
const CreateMangrullo = () => {
  const [formData, setFormData] = useState<MangrulloFormData>({
    zone: "",
    dangerousness: 0,
    state: "Activo",
    image: "",
    qualification: 0,
  })

  const [disabler, setDisabler] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors: Record<string, string | null> = {
      zone: isValidZone(formData.zone),
      dangerousness: isValidDangerousness(formData.dangerousness),
      image: isValidImage(formData.image),
      qualification: isValidQualification(formData.qualification),
    }

    setErrors(validationErrors)

    if (Object.values(validationErrors).some(error => error !== null)) {
      return
    }

    setDisabler(true)

    //
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <label className="text-4xl mb-4">
        Zona:
        <input
          className="flex flex-col items-center"
          type="text"
          name="zone"
          value={formData.zone}
          onChange={handleChange}
        />
        {errors.zone && <span className="error">{errors.zone}</span>}
      </label>
      <br />

      <label className="text-4xl mb-4">
        Peligrosidad:
        <input
          className="flex flex-col items-center"
          type="number"
          name="dangerousness"
          value={formData.dangerousness}
          onChange={handleChange}
        />
        {errors.dangerousness && (
          <span className="error">{errors.dangerousness}</span>
        )}
      </label>
      <br />

      <label className="text-4xl mb-4">
        Estado:
        <select
          className="flex flex-col items-center"
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="Activo">Activo</option>
          <option value="No Activo">No Activo</option>
        </select>
      </label>
      <br />

      <label className="text-4xl mb-4">
        URL de imagen:
        <input
          className="flex flex-col items-center"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        {errors.image && <span className="error">{errors.image}</span>}
      </label>
      <br />

      <label className="text-4xl mb-4">
        Calificación:
        <input
          className="flex flex-col items-center"
          type="number"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
        {errors.qualification && (
          <span className="error">{errors.qualification}</span>
        )}
      </label>
      <br />

      <button type="submit" disabled={disabler}>
        Crear Mangrullo
      </button>
    </form>
  )
}

export default CreateMangrullo
