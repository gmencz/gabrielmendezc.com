import styled from 'styled-components';

export const Footer = styled.footer`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
`;

export const SubscribeFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 12px;

  &:not(:last-of-type) {
    flex-grow: 1;
  }

  & > label {
    margin-bottom: 0.45rem;
  }
`;
