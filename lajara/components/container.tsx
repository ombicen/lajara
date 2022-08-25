import Wrapper from '@mui/material/Container';
export default function Container({ children }) {
  return (<Wrapper maxWidth={false} disableGutters={true}>
    {children}
  </Wrapper>)
}
