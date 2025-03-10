export const imageUrlConverter = (image: string) => {
  console.log("image kkkkkkk", image)

  if (image?.startsWith("http")) {
    // console.log("image vitraaaaaaaaaa")
    return image
  } else {
    // console.log("else parrtttttttttttttt")

    const fullUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${image}`
    return fullUrl
  }
}
