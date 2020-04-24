import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuLinksItem = styled.li`
    padding: .5rem 0;

    .active {
        color: #04D976;
    }
`
export const MenuLinksLink = styled(Link)`
    color: #f2f2f2;
    text-decoration: none;
    transition: coilor .5s;

    &:hover {
        color: #04D976;
    }
`