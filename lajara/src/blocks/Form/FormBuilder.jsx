import React from 'react'
import styled from 'styled-components'

export default function FormBuilder({ content, success, handleSubmit }) {
    return (
        <>
            {content && (
                <StyledForm onSubmit={handleSubmit}>
                    {success === true && (
                        <div className='confirmation'>Tack för ditt meddelande, ditt meddelande har skickats.</div>
                    )}
                    {success?.error && (
                        <div className='confirmation failed'>{success?.error}</div>
                    )}
                    {content.input.map((field, i) => (
                        <>
                            {field.settings.type == "Text" ? <input key={i} type="text" placeholder={field.placeholder} className={"w-" + field.settings.width} name={field.name} /> : <textarea key={i} placeholder={field.placeholder} className={"w-" + field.settings.width} name={field.name} />}
                        </>
                    ))}
                    <button type='submit'>Skicka</button>
                </StyledForm>
            )}
        </>
    )
}
const StyledForm = styled.form`
 display: flex;
        flex-flow: row wrap;
        gap: 20px;
    .confirmation{
        border:1px solid black;
        padding:10px 15px;
        font-size:14px;
        width:100%;
    }
    .w-50 {
        flex: 1 1 45%;
    }
    
    .w-100 {
        flex: 1 1 100%;
    }
    
    input[type="text"], textarea {
        padding: 15px 0 10px;
        border:none;
        border-bottom:1px solid black;
        outline:none;
    }
    
    input.w-25 {
        flex: 1 1 20%;
    }
    `