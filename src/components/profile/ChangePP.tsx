"use client"
import Image from "next/image"
import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "../ui/button"
import { useChangePp } from "../../../hooks/mutations/profilePicture"
import toast from "react-hot-toast"
import { useSession } from "../../../providers/SessionProvider"

export default function ChangePP() {
  const [preview, setPreview] = useState<any>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const {
    session: { user },
  } = useSession()

  const { mutateAsync, isPending } = useChangePp()

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = new FileReader()
    file.onload = () => {
      setPreview(file.result)
    }
    file.readAsDataURL(acceptedFiles[0])
    setImageFile(acceptedFiles[0])
    // console.log("acepted", acceptedFiles[0]);
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  function handleChangePP() {
    const fd = new FormData()

    fd.append("pic", imageFile!)
    fd.append("id", user._id)

    // console.log("formdata", { ...fd })
    // console.log("fd", fd)

    const promise = mutateAsync(fd).then(() => {
      setPreview(null)
    })
    toast.promise(promise, {
      loading: "Please wait uploading...",
      success: "Successfully Updated",
      error: (err) => "Something went wrong!",
    })
  }
  return (
    <div>
      <div className=" grid place-items-center border-2 border-dashed overflow-hidden w-fit  rounded-lg cursor-pointer  object-cover  h-[20vh] md:h-[40vh]">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {preview && (
            <Image
              height={400}
              width={400}
              alt="person"
              className=" object-cover cursor-pointer rounded-lg object-center"
              src={preview}
            />
          )}
          {!preview && isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            !preview && (
              <p className=" text-xs px-8">
                Drag 'n' drop some files here, or click to select files
              </p>
            )
          )}
        </div>
      </div>
      <Button type="button" onClick={() => handleChangePP()} className=" mt-4">
        Confirm Changes
      </Button>
    </div>
  )
}
