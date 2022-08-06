import React from 'react'
import { Image, LoaderDiv } from './StyledComponents'

export default function FailureView() {
    return (
        <LoaderDiv>
            <Image src='https://itinerantnotes.com/blog-theme/images/empty.gif' noresult />
        </LoaderDiv>
    )
}
