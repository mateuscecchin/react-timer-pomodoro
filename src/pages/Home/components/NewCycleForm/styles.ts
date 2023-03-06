import styled from "styled-components";

export const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme["gray-500"]};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme["gray-100"]};

    &:focus{
        box-shadow: none;
        border-color:${props => props.theme["green-500"]} ;
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`


export const FormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  flex-wrap: wrap;
`;