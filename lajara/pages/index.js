import Head from "next/head";
import styled from "styled-components";

export default function Home() {


	return <>
		<Head>
			<title>Lajara Website</title>
		</Head>

		<Style className="contained small">
			<div className="spacer l"></div>
			<h1>Lajara Website</h1>
			<span>v 0.1.0</span>
			<div className="spacer m"></div>
			<p>This is a boilerplate project for Acrowd Next.js &amp; Wordpress projects. To get started edit the <span>index.js</span> page and take a look at the README file.</p>

			<div className="spacer m"></div>


		</Style>
	</>
}

const Style = styled.main`

	& > p {
		line-height: 1.6em;
	}

	& > span {
		display: inline;
		background-color: #f0f0f0;
		padding: 0.15rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.5;
		color: #333;
		margin: 0.5rem 0;
	}
`