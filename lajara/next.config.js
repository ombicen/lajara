/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});

		return config;
	},
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: [
			'lajara.se',
			'via.placeholder.com',
		],
	},
}

module.exports = nextConfig
