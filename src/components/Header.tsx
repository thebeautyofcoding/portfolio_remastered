import React, { useEffect } from "react"
import { header } from "../data/header"
import { motion } from "framer-motion"
function Header() {
  
  const textToDisplay =
    "Frontend Developer | Backend Developer | Deployment | Scripting"
  const [text, setText] = React.useState("...")
  const [typeNow, setTypeNow] = React.useState(false)
  setTimeout(() => {
    setTypeNow(true)
  }, 1000)

  const parentContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
      },
    },
  }
  const ulContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 3,
      },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    let typer: ReturnType<typeof setInterval>
    if (typeNow) {
      typer = setInterval(() => {
        const type = () => {
          const fullText = textToDisplay
          const updatedText = fullText.substring(0, text.length + 1)
          setText(updatedText)
        }
        type()
      }, 25)
    }

    return () => {
      clearInterval(typer)
    }
  }, [text, typeNow])

  return (
    <section id="header">
      <div className="relative h-screen w-screen ">

        <motion.div
          variants={parentContainer}
          initial="hidden"
          animate="show"
          className="absolute text-white min-w-[80%]  sm:min-w-[40%] top-[10%] left-[5%]">
          <motion.div variants={item}>
            <div className=" glass-background opacity-80 p-4 rounded-lg glowing-shadow">
              <h1 className="text-xl sm:text-4xl mb-4">Welcome</h1>
              <p>I am Heiner and I am interested in everything Fullstack.</p>
              <p className="font-bold text-white">{text}</p>
            </div>
          </motion.div>
          <motion.ul
            variants={ulContainer}
            initial="hidden"
            animate="show"
            className="flex mt-8 justify-center ">
            {header.images.map((image, index) => (
              <motion.li variants={item} key={"logo-" + index} className="">
                <img
                  src={image}
                  className="hidden sm:block sm:w-20 sm:h-20 object-contain  glowing-shadow rounded-full m-4"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <div className='absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]'>
                <div className='slide-bottom'>
                    <div className='down-arrow'>
                    </div>
                    <div className='down-arrow'>
                    </div>
                    <div className='down-arrow'>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Header
