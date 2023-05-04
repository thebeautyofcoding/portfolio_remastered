
import { AiFillGithub } from "react-icons/ai/index"
import { SiUpwork } from "react-icons/si/index"
import { AiFillYoutube } from "react-icons/ai/index"

function SocialMedia() {
  return (
    <div className="shadow p-2 rounded flex flex-col bg-gray-200 glass-background glowing-shadow">
      <div className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer">
        <a href="https://github.com/thebeautyofcoding">
          {" "}
          <AiFillGithub size={38} />
        </a>
      </div>
      <div className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer my-4">
        <a href="https://www.upwork.com/freelancers/~01e359856bc8297a0f">
          <SiUpwork size={38} />
        </a>
      </div>
      <div className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer">
        <a href="https://www.youtube.com/channel/UC7FZUBPLkay4dhoRw1W5ehw/videos">
          <AiFillYoutube size={38} />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
