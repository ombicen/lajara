import React, { useState } from 'react'
import styled from 'styled-components'
import { Map } from '../../pages/Project/components/Map'
import Tabs from './Tabs'
import FormBuilder from './FormBuilder'
const Form = ({ data: content }) => {
    console.log(content);
    const [success, setSuccess] = useState(false)
    const [active, setActive] = useState(0);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            let res = await fetch(content.end_point, {
                method: "POST",
                body: data,
            });
            let resJson = await res.json();
            if (res.status == 200 || res.status == 201) {
                setSuccess(true)
            } else {
                setSuccess({ error: 'Ett fel har uppstått' })
            }
        } catch (err) {
            console.log(err);
        }
    }
    return <>

        <StyledContainer className='contained'>
            <Map
                location={{ lat: 59.3409611, lng: 18.0844809 }}

            />
            {content && content.input &&
                <div className='form' >
                    <Tabs active={active}>
                        <section>
                            <h3>{content.title}</h3>
                            <FormBuilder content={content} handleSubmit={handleSubmit} success={success} />
                        </section>
                        <section className='address'>
                            <h3>Våra kontaktuppgifter.</h3>
                            <div className='address__row'>
                                <h4>Adress.</h4>
                                <address>

                                    <b>Lajara Group AB</b>
                                    <p>
                                        Artellerigatan 64b<br />
                                        124 23 Stockholm
                                    </p>
                                </address>
                            </div>
                            <div className='address__row'>
                                <h4>Kontaktpersoner.</h4>
                                <address>

                                    <b>Lars</b>
                                    <p>
                                        <b>Telefon:</b> 070 007 07 07
                                    </p>
                                </address>
                            </div>
                        </section>
                        <div className='tabs'>
                            <button type='button' className={active == 0 ? "active" : ""} onClick={() => setActive(0)}>Formulär</button>
                            <button type='button' className={active == 1 ? "active" : ""} onClick={() => setActive(1)}>Uppgifter</button>
                        </div>
                    </Tabs>
                </div>
            }

        </StyledContainer>

    </>
}
const StyledContainer = styled.div`
background:black;
position:relative;
padding-bottom:100px;
height:700px;
box-sizing: content-box;
@media(max-width:700px){
    height:unset;
    padding-bottom:0;
}
    #map{
        position:absolute;
        top:0;
        left:calc(-1 * (100vw - 100%)/2);
        height:100%;
        width:100vw;
        z-index:5;
        @media(max-width:700px){
            position:relative;
            height:unset;
        }
    }
    .form{
        display: flex;
        flex-flow: column;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    background: white;
    border-radius:10px;
    box-shadow:5px 5px 25px -10px black;
    max-width: 450px;
    @media(max-width:700px){
            position:relative;
            left:unset;
            max-width:unset;
            border-radius:0;
            top:0px;
            transform: none;
            margin-top: -50px;
        }
    section{
        align-content: flex-start;
        align-items: flex-start;
        min-height: 580px;
        display: flex;
        flex-flow: row wrap;
        gap: 20px;
        justify-content: start;
        left:8rem;
      
        padding: 40px;
        
    
        &.address > {
           .address__row{
            display: flex;
            flex-flow: column nowrap;
            width: 100%;
            address{
                font-style: normal;
            }
           }
        }
    }
    .tabs{
        position: absolute;
        left: 100%;
        top:40px;
        transform-origin: left top;
        transform:rotate(90deg) translateY(-100%);
        display: flex;
        flex-flow:row nowrap;
        @media(max-width:700px){
            position: relative;
            top: unset;
            left: unset;
            transform: unset;
        }
        button{
            border-radius: 0;
            border-top-right-radius: 50px;
            padding-right:50px;
            background:#464646;
            z-index: 5;
            &:last-child{
                padding-left:50px;
                margin-left:-40px;
                z-index: 1;
            }
            &.active{
                background:black;
               
            }
        }
    }

    z-index:10;
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
  
}
    `


export default Form;