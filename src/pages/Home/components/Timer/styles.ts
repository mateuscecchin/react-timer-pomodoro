import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  font-size: 10rem;
  line-height: 8rem;

  span {
    background: ${(props) => props.theme["gray-600"]};
    font-family: "Roboto mono", monospace;
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Divider = styled.div`
  padding: 0.5rem;
  font-family: "Roboto mono", monospace;
  color: ${(props) => props.theme["green-500"]};
`;