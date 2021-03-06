import styled, { css } from 'react-emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import theme from 'theme';

const grey = css`color: ${theme.palette.grey[600]}`;

export const Wrapper = styled.div`
  display: block;
  ${theme.breakpoints.up('sm')} {
    display: flex;
    align-items: baseline;
  }
`;

export const GreyIcon = styled(FontAwesomeIcon)`
  ${grey};
`;

export const GreyClickableIcon = styled(GreyIcon)`
  cursor: pointer;
`;

export const GreyType = styled(Typography)`
  ${grey};
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const FilterField = styled(TextField)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 3rem;
`;
