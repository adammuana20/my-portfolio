import { InputHTMLAttributes, FC } from 'react'

import './FormInput.styles.scss'

type FormInputProps = {
    form: string;
    label: string;
    inputOptions: {
        type?: string;
        name: string;
        value: string;
        required: boolean;
        maxLength?: number;
        onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        onFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
        onMouseEnter: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    }
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>



const FormInput: FC<FormInputProps> = ({ label, form, inputOptions }) => {
    return (
        <div className='group'>
            { form === 'input' ?(
                    <>
                        <input className='form-input' {...inputOptions} />
                        {
                            label && (
                                <label className={`form-input-label ${inputOptions.value && typeof inputOptions.value === 'string' && inputOptions.value.length ? 'shrink': ''}`}>
                                    { label }
                                </label>
                            )
                        }
                    </>
                )
                : (
                    <>
                        <textarea className='form-input' {...inputOptions} rows={10} />
                        {
                            label && (
                                <label className={`form-input-label ${inputOptions.value && typeof inputOptions.value === 'string' && inputOptions.value.length ? 'shrink': ''}`}>
                                    { label }
                                </label>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default FormInput