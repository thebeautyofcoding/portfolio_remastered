import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from './../data/skills';
function Skills() {
    const controls = useAnimation();
  
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start((i: number) => ({
            y: 0,
            x:0,
          opacity: 1,
          transition: { duration: 0.5, delay: i * 0.1 },
        }));
      }
    }, [controls, inView]);
  
    return (
      <section id="skills" className="lg:max-w-[100%] max-w-[75%] relative opacity-90 mb-60 sm:h-[100vh] md:h-auto text-white mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">
          Good Skills Mean Good Business
        </h2>
        <ul className="flex sm:flex-row sm:flex-wrap flex-col justify-center items-center ">
          {skills.map((skill, index) => (
            <motion.li
              ref={index === 0 ? ref : undefined}
              initial={{ y: 100, opacity: 0, x:100 }}
              animate={controls}
              custom={index}
              key={'skill-' + index}
              className="glass-background hover-glowing-shadow-and-scale:hover hover-glowing-shadow-and-scale rounded-lg flex flex-col sm:max-w-[250px] mx-4 overflow-clip hover:scale-110 duration-300  mb-8 max-w-[90%]">
              <img
                src={skill.image}
                alt={skill.title}
                className="object-cover sm:h-[250px] sm:w-[250px] w-full h-[350px]"
              />
              <div className="p-2 ">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
                </div>
  
                <p>{skill.description}</p>
              </div>
            </motion.li>
          ))}
            </ul>
            <div className='absolute flex flex-col bottom-[-15%] left-[50%] translate-x-[-50%]'>
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
    );
  }
  


export default Skills
