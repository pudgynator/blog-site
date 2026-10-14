import Image from "next/image"

const Loading = () => {
  return (
    <Image
      src="/spinner.svg"
      alt="Loading"
      width={32}
      height={32}
      className="animate-spin"
    />
  )
}

export default Loading
