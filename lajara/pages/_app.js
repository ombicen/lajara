import { Layout } from 'src/layout/Layout/Layout';
import { LayoutHandler } from 'src/utils/LayoutHandler'
import '../styles/style.scss'
import 'range-slider-input/dist/style.css';
import { usePreserveScroll } from 'util/usePreserveScroll';

function App({ Component, pageProps }) {

	usePreserveScroll();

	LayoutHandler.listen();

	return <Layout>
		<Component {...pageProps} />
	</Layout>
}

export default App
