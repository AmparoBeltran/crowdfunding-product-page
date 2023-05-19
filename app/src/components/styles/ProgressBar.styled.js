import styled from "styled-components";

export const ContainerStyles = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
`;

export const FillerStyles = styled.div`
  height: 100%;
  width: ${({ completed }) => completed + "%"};
  background-color: ${({ theme }) => theme.colors.moderateCyan};
  border-radius: inherit;
  text-align: right;
`;
