import React from 'react'
import ErrorImage from '../../assets/Error.png'
import { ImgStyled, ImgContainer } from './styled'

const ErrorPage = () => {
    return (
        <ImgContainer>
            <ImgStyled src={ErrorImage} />
        </ImgContainer>
    )
}

export default ErrorPage