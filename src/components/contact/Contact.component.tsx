import { useState, FormEvent, ChangeEvent } from 'react'

import titleBox from '../../assets/images/section-title.png'
import { useSectionInView } from '../../library/hooks'

import './Contact.styles.scss'

const defaultFormFields = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

const Contact = () => {
    const { ref } = useSectionInView('Contact')
    const [formFields, setFormFields] = useState(defaultFormFields)

    const { name, email, subject, message } = formFields

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormFields((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className='contact-container' id='contact' ref={ref}>
            <div className="section-title-container">
                <img src={titleBox} alt='Title' />
                <h2>CONTACT</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </form>
        </section>
    )
}

export default Contact