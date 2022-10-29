
import React, { useState } from "react";
import Image from 'next/image'
import styled from 'styled-components'
export default function Item({ data: item }) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }
    return (
        <StyledSection className="carousel__slide" >

            <div className="top">
                {item.image?.src && <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={200}
                    height={200}
                    objectFit={'contain'}
                />}

                <div className="line"></div>
            </div>

            <div onClick={() => toggleOpen()} className={open ? "content expand" : "content"} dangerouslySetInnerHTML={{ __html: item.content }} />
            {!open && (
                <StyledLink onClick={() => toggleOpen()}>Mer +</StyledLink>
            )}

        </StyledSection>
    )
}
const StyledLink = styled.a`
color:var(--color-primary);
`;
const StyledSection = styled.div`
    max-width:380px;
    &:nth-last-child(-n+1) {
        .top {
            .line {
                display: none !important;
            }
        }
    }

    .top {
        display: flex;
        align-items: center;
        margin-right: 1rem;

        & > span {
            width: 8rem !important;
            height: 8rem !important;
        }

        .line {
            flex-grow: 1;
            height: 1px;
            background-color: var(--color-primary);
        }
    }

    .content {
        font-size: 14px;
        margin-top: 2rem;
        width: 80%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
  
        overflow: hidden;
       &.expand{
        -webkit-line-clamp:unset;
       }
        h2, h3 {
            font-size: 22px;
            color: var(--color-primary);
            margin-bottom: 1rem;
        }
    }

`