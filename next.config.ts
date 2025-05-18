import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	transpilePackages: ['@zxing/library'],
};

export default nextConfig;
