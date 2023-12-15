import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Highlight, themes } from "prism-react-renderer";
import { CiMail } from "react-icons/ci";

import FormInput from '../form-input/FormInput.component';
import { useLazyAnimation, useSectionInView } from '../../library/hooks'

import titleBox from '../../assets/images/section-title.png'

import './Contact.styles.scss'
import Button from '../button/Button.component';

const defaultFormFields = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

const Contact = () => {
    const { ref } = useSectionInView('Contact')
    const [cursorBlink, setCursorBlink] = useState<boolean>(true);
    const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null)
    const { ref: refAnimation, inView } = useLazyAnimation();

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { name, email, subject, message } = formFields

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setCursorBlink((prev) => !prev);
        }, 400);

        return () => {
            clearInterval(blinkInterval);
        };
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setFormFields((prev) => ({
            ...prev,
            [name]: value
        }))

        setLastUpdatedField(name)
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const wordWrap = (
        text: string,
        maxLineLength: number,
        indentation: string
    ) => {
        const words = text.split(" ");
        const lines: string[] = [];
        let currentLine = "";

        words.forEach((word) => {
        if (currentLine.length + word.length <= maxLineLength) {
            currentLine += word + " ";
        } else {
            lines.push(currentLine.trim());
            currentLine = `${indentation}${word} `;
        }
        });

        if (currentLine) {
            lines.push(currentLine.trim());
        }

        return lines.join("\n");
    };

    const codeSnippet = `
import  { useState } from "react";

// 🌠 Unleashing Cosmic Creativity:
// Crafting an Enchanting Email Odyssey 🌌

const [sender, setSender] = "${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
    }🛸";
const [recipient, setRecipient] = "${email}${
    lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
    }📧";
const [subject, setSubject] = "${subject}${
    lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
    }✨";
const [message, setMessage] = 
\`🚀 Hello, intrepid traveler! 👽👋\n
Across the cosmos, a cosmic missive for you:\n
"${wordWrap(message, 40, " ")}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
    }"\n
Wishing you stardust dreams,\n
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;

    return (
        <section className='contact-container' id='contact' ref={ref}>
            <div className={`section-title-container ${inView ? 'show' : ''}`} ref={refAnimation}>
                <img src={titleBox} alt='Title' />
                <h2 className='section-title'>CONTACT</h2>
            </div>
            <div className="contact-details">
                <div className={`highlight-container ${inView ? 'show' : ''}`} ref={refAnimation}>
                    <Highlight
                        code={codeSnippet}
                        language="tsx"
                        theme={themes.nightOwl}
                    >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={`${className} pre-content`} style={{...style, whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })}/>
                            ))}
                            </div>
                        ))}
                        </pre>
                    )}
                    </Highlight>
                </div>
                <form onSubmit={handleSubmit} className={`hide-form ${inView ? 'show' : ''}`} ref={refAnimation}>
                    <FormInput 
                        form='input'
                        label='Your Name'
                        inputOptions={{
                            type:'text',
                            name:'name',
                            value:name,
                            onChange:handleChange,
                            onFocus:() => setLastUpdatedField('name'),
                            onMouseEnter:() => setLastUpdatedField('name'),
                            maxLength:45,
                            required:true,
                        }}
                    />
                    <FormInput 
                        form='input'
                        label='Your Email'
                        inputOptions={{
                            type:'text',
                            name:'email',
                            value:email,
                            onChange:handleChange,
                            onFocus:() => setLastUpdatedField('email'),
                            onMouseEnter:() => setLastUpdatedField('email'),
                            maxLength:45,
                            required:true,
                        }}
                    />
                    <FormInput 
                        form='input'
                        label='Your Subject'
                        inputOptions={{
                            type:'text',
                            name:'subject',
                            value:subject,
                            onChange:handleChange,
                            onFocus:() => setLastUpdatedField('subject'),
                            onMouseEnter:() => setLastUpdatedField('subject'),
                            maxLength:45,
                            required:true,
                        }}
                    />
                    <FormInput 
                        form='textarea'
                        label='Your Message'
                        inputOptions={{
                            name:'message',
                            value:message,
                            onChange:handleChange,
                            onFocus:() => setLastUpdatedField('message'),
                            onMouseEnter:() => setLastUpdatedField('message'),
                            maxLength: 500,
                            required:true,
                        }}
                    />
                    <div className='form-btn'>
                    <Button
                        value={`Send`}
                        iconSVG={CiMail}
                        buttoncolor={'main-btn'}
                        iconcolor={`#fff`}
                        type="submit"
                        elementType="input"
                    />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact