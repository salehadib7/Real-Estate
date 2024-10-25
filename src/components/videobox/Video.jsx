import { Play } from "lucide-react"
import Image from "next/image"

const Video = () => {
  return (
    <div className=" container mx-auto px-8 py-10">
        <div className="bg-red-200 w-full h-64 rounded-2xl videoBg flex justify-center items-center">
            <div className="h-20 w-20 rounded-full transition-all bg-blue-500 flex justify-center items-center hover:bg-white playBox">
                <Play size={40} className="text-white play"/>
            </div>
        </div>
    </div>
  )
}

export default Video