import { motion, useAnimation } from 'framer-motion'

import emailjs from '@emailjs/browser'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact () {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
// type event e
    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        setLoading(true)
        emailjs.send(
            'service_btlooyp',
            'template_6yr6lwv',
            {
                from_name: form.name,
                to_name: 'heiner',
                from_email: form.email,
                message: form.message,
                to_email: 'webdevislife2021@gmail.com',
              
            },
            'ysdbXR2IF626ZN0lL'
            
        ).then(() => {
            setLoading(false)
            setForm({
                name: '',
                email: '',
                message: ''
            })
            alert('Your message has been sent successfully')
        }).catch((e) => {
            setLoading(false)
            console.log(e)
            alert('Something went wrong, please try again later')
        })
    
    }

    const contactVariants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
             
                duration: 1.5,
                type: 'spring',
                stiffness: 50
            }
        }
    }

    const controls = useAnimation()


    const [ref, inView] = useInView()

    useEffect(() => {

        if (inView) {
            controls.start('visible')
        }

    }, [controls, inView])

    
    return <section className="w-full h-full relative flex flex-col justify-center items-center overflow-hidden">
        <motion.h2 ref={ref} animate={controls} className="text-3xl font-semibold text-center  text-white" initial='hidden' variants={contactVariants}>    
               Contact
            </motion.h2>
        <motion.div className="border-2 w-[98%] md:w-[60%] xl:w-[40%] text-center transparent-glass-background py-8 px-4 rounded-3xl glowing-shadow mt-8" ref={ref} animate={controls} initial='hidden' variants={contactVariants}>
        
            <form onSubmit={(e)=>handleSubmit(e)}
            className='mt-12 flex flex-col gap-8'
            >
                <label className="flex flex-col"><span className='text-white mb-4 font-bold'></span>
                <input type="text" value={form.name} name="name" placeholder="Name"  onChange={(e)=>handleChange(e)} className="border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none font-medium" />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-bold mb-4'>Email</span>
                    <input type="email" value={form.email}  name="email" placeholder="Email" onChange={(e)=>handleChange(e)} className="border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none font-medium" />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-bold mb-4'>Message</span>
                    <textarea rows={7} value={form.message} name="message" placeholder="Message" onChange={(e)=>handleChange(e)} className="border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none font-medium" />
                </label>
                <button type="submit" className="border-2 hover-glowing.shadow-and-scale py-3 px-8 rounded-xl outline-none w-fit text-white font-bold">

                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </motion.div>

    </section>

}