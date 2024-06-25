/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: isProd ? '/fun4date' : '',

  /**
   * Set asset prefix. This is the URL prefix for assets.
   *
   * @see https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
   */
  assetPrefix: isProd ? '/fun4date/' : '',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  
  /**
   * Environment variables
   */
  env: {
    PUBLIC_URL: isProd ? "https://ging.github.io/fun4date/" : "",
    BASE_PATH: isProd ? "/fun4date" : ""
  }
};

export default nextConfig;
