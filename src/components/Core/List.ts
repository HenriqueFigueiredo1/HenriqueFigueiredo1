// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";

const List = styled.ul`
  li {
    color: ${({
  theme
}: any) => theme.colors.text};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 28px;
    margin-left: 20px;
    margin-bottom: 17px;
    display: flex;
    &:before {
      content: "";
      min-width: 10px;
      max-width: 10px;
      min-height: 10px;
      max-height: 10px;
      background-color: ${({
  theme
}: any) => theme.colors.dark};
      display: block;
      border-radius: 500px;
      margin-right: 15px;
      margin-top: 10px;
    }
  }
`;

export default List;
