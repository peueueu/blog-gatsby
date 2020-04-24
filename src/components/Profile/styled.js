import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
        color: #f2f2f2;
        display:flex;
        flex-direction: column;    
`
export const ProfileLink = styled(Link)`
        color: #f2f2f2;
        text-decoration: none;
        transition: color .5s;
        &:hover {
            color: #04D976;
        }
`
export const ProfileAuthor = styled.h1`
        font-size: 1.65rem;
        margin: .5rem auto 1.5rem;
`
export const ProfilePosition = styled.small`
        display: block;
        font-size: 1.25rem;
        font-weight: 300;
`
export const ProfileDescription = styled.p`
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.4        
`
