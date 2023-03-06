import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 3.5rem;
  }
`;

export const StartTimerButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer; 

    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${props => props.theme["green-700"]}
    }

`

export const InteruppedTimerButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer; 

    background: ${props => props.theme["red-500"]};
    color: ${props => props.theme["gray-100"]};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${props => props.theme["red-700"]}
    }

`