import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/Theme/index'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp