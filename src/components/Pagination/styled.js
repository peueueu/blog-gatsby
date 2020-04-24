import styled from "styled-components";

export const PaginationWrapper = styled.section`
align-items: center;
border-top: 1px solid #012619;
color: #025920;
display: flex;
padding: 1.5rem 3rem;
justify-content: space-between;

a {
  color: #025920;
  text-decoration: none;
  transition: color .5s;
  &:hover{
    color: #04D976;
  }
}
`