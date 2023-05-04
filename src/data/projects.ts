import converter from "../images/converter.png"
import writingislove from "../images/writingislove.png"
import twitterclone from "../images/twitterclone.png"
import { AiFillGithub } from "react-icons/ai/index"
import { BiLinkExternal } from "react-icons/bi/index"
export const projects = [
  {
    title: "Video Converter Frontend",
    description:
      "The frontend for the Video Converter built with NextJS (TypeScript) and TailwindCSS",
    tag: "Frontend",
    image: converter,
    githubLink: {
      link: "https://github.com/thebeautyofcoding/video_converter/tree/main/frontend",
      icon: AiFillGithub,
    },
    projectLink: {
      link: "https://savetube.click/",
      icon: BiLinkExternal,
    },
  },
  {
    title: "Video Converter Backend",
    description: "The backend for the video Converter built with Flask",
    tag: "Backend",
    image: converter,
    githubLink: {
      link: "https://github.com/thebeautyofcoding/video_converter/tree/main/api",
      icon: AiFillGithub,
    },
    projectLink: {
      link: "https://savetube.click/",
      icon: BiLinkExternal,
    },
  },
  {
    title: "Twitter Clone Backend",
    description:
      "The backend for a Twitter clone built with Laravel and Pusher",
    tag: "Backend",
    image: twitterclone,
    githubLink: {
      link: "https://github.com/thebeautyofcoding/twitterClone",
      icon: AiFillGithub,
    },
    projectLink: {
      link: "https://elastic-pike-81f160.netlify.app/",
      icon: BiLinkExternal,
    },
  },
  {
    title: "Twitter Clone Frontend",
    description:
      "The frontend for a Twitter clone built with Vue.js and TailwindCSS",
    tag: "Frontend",
    image: twitterclone,
    githubLink: {
      link: "https://github.com/thebeautyofcoding/twitterCloneFrontend",
      icon: AiFillGithub,
    },
    projectLink: {
      link: "https://elastic-pike-81f160.netlify.app/",
      icon: BiLinkExternal,
    },
  },

  {
    title: "Blogging Platform Backend",
    description:
      "The backend for a Twitter clone built with ExpressJS and Mongoose",
    tag: "Backend",
    image: writingislove,
    githubLink: {
      link: "https://github.com/thebeautyofcoding/blogapi",
      icon: AiFillGithub,
    },
    projectLink: {
      link: "https://writingislove.net/",
      icon: BiLinkExternal,
    },
  },
  {
    title: "Blogging Platform Frontend",
    description:
      "The frontend for a Twitter clone built with NextJS and plain CSS",
    tag: "Frontend",
    image: writingislove,
    githubLink: {
      link: "https://github.com/thebeautyofcoding/justpractice-blog",
      icon: AiFillGithub,
    },
    projectLink: {
      link: "https://writingislove.net/",
      icon: BiLinkExternal,
    },
  },
]
