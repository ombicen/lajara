import React from 'react'
import styled from 'styled-components'
import Icon, {Icons} from 'src/elements/Icon'

export default function Newsletter({data}) {

    return (
        <Style className = "newsletter">
            
                <div className='box'>
                    {data.newsletter.label  && <div className='h5'>{data.newsletter.label}</div>}
                    <div className='input-container'>
                        <input type = "text" />
                        <Icon type = {Icons.Arrow}  color = {'white'}/>
                    </div>
                    {data.newsletter.text && <div className='text' dangerouslySetInnerHTML={{__html: data.newsletter.text}} />}
                    
                </div>
               
        </Style>
    )
}

const Style = styled.div`

`