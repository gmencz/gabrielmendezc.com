import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  width: calc(13px * 3);
  text-align: center;

  & > div {
    width: 13px;
    height: 13px;
    background-color: ${props => props.theme.pink};
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out both;
    animation: bouncedelay 1.4s infinite ease-in-out both;

    &:first-of-type {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    &:nth-of-type(2) {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }

  @-webkit-keyframes bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
