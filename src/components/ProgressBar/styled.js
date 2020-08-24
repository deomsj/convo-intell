import styled from 'styled-components';

export default styled.div`
  user-select: none;
  margin: 20px;
  display: flex;
  align-items: center;

  .bar__time {
    color: ${({ theme }) => theme.colors.text.normal};
    font-size: 16px;
  }

  .bar__progress {
    flex: 1;
    border-radius: 5px;
    margin: 0 20px;
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .bar__progress__knob {
      position: relative;
      height: 16px;
      width: 16px;
      border: 1.5px solid ${({ theme }) => theme.colors.border};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
