import  { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { about } from "./../data/about"
const AboutMe = () => {
  const controls = useAnimation();
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [hobbiesAnimation, setHobbiesAnimation] = useState(false);
  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1, transition: { duration: 1.5 } }).then(() => {
        setHobbiesAnimation(true);
      });
     
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="w-[95%] flex justify-center relative opacity-90 mb-16 h-[100vh] text-white mx-auto">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={controls}
        className="glass-background p-8 rounded-xl max-w-3xl flex flex-col glowing-shadow h-auto my-auto">
        <img
          src={about.profileImage}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4 mx-auto object-cover"
        />
        <animated.h2 style={springProps} className="text-2xl font-semibold mb-4">
          About Me
        </animated.h2>
        <p className=" leading-relaxed">
          {about.p}
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
          <ul className="list-disc list-inside">
            {about.hobbies.map((hobby, index) => (
              <motion.li
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={ hobbiesAnimation?{ x: 0, opacity: 1 }:{}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="">
                {hobby}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      <div className="absolute flex flex-col bottom-[3%] left-[50%] translate-x-[-50%]">
        <div className="slide-bottom">
          <div className="down-arrow" />
          <div className="down-arrow" />
          <div className="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;