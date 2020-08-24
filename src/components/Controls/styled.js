import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  .controls {
    display: flex;
    align-items: center;
  }

  button {
    width: fit-content;
    background-color: transparent;
    border: none;

    svg {
      font-size: 19px;
      color: ${({ theme }) => theme.colors.disabled};
    }

    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &.play-pause{
      svg {
        font-size: 34px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
}
`;
