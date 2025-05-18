import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	transpilePackages: ['@zxing/library'],
};

export default nextConfig;
