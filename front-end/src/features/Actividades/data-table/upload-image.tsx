import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { uploadImageActivity } from "@/redux/action-creators/actividades/admin/admin-upload-image"
import { loadingImage } from "@/redux/action-creators/actividades/admin/image-loading"
import { useAppDispatch } from "@/redux/hooks"
import { Label } from "@radix-ui/react-label"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

const UploadImageActivity: React.FC = () => {
  //const token = localStorage.getItem("TOKEN")
  const dispatch = useAppDispatch()
  const [file, setFile] = useState<File | undefined>()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList
    }
    setFile(target.files[0])
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (typeof file === "undefined") return
    const formData = new FormData()
    formData.append("image", file)
    console.log(formData.get("image"))
    dispatch(uploadImageActivity({ image: formData.get("image") }))
    dispatch(loadingImage(true))
    setSubmitted(true)
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="grid gap-4 h-14 grid-cols-4 items-center gap-x-4 gap-y-1">
        <Label className="text-sm text-right">Imagen</Label>
        <Input
          onChange={handleChange}
          name="image"
          type="file"
          accept="image/jpeg, image/jpg, image/png, image/webp"
          className="col-span-3"
        />
      </div>

      <div className="flex justify-end">
        {file ? (
          !submitted ? (
            <Button variant={"outline"} type="submit">
              Subir Imagen
            </Button>
          ) : (
            <Button disabled variant={"ghost"}>
              Imagen Subida
              <CheckCircle2 className="size-5 ml-2" />
            </Button>
          )
        ) : (
          <Button disabled variant={"ghost"}>
            Selecciona una imagen
          </Button>
        )}
      </div>
    </form>
  )
}

export default UploadImageActivity
