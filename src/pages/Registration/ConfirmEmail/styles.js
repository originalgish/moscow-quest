import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ConfirmEmailForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 25px;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`
export const ConfirmEmailContainer = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    display: block;
  }
`
const Text = styled.span`
  display: block;
  font-size: 1em;
  font-weight: 400;
  color: #ffffff;
`
export const Title = styled.h1`
  margin: 0;
  font-size: 2em;
  text-align: right;
  padding-right: 25px;
  border-right: 2px solid #dbdbdb;
  max-width: 300px;
  @media screen and (max-width: 600px) {
    border: none;
    text-align: left;
    margin-bottom: 1em;
  }
  ${Text}
`
export const SumbitAnotherEmail = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-size: 0.9em;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1em;
  text-decoration: underline;
  padding-bottom: 2px;
`
export const FormTitle = styled(Text)`
  margin-bottom: 1em;
  font-size: 1.2em;
`
export const LoginCall = styled(Text)``
export const StyledLink = styled(Link)`
  color: #ffffff;
  ${Text}
`
