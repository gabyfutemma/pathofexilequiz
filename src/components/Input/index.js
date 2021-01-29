import styled from 'styled-components';

const Input = styled.input`
  width: 95%;
  padding: 8px 8px;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Input;
