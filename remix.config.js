/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildTarget: "@remix-run/node", // ✅ This tells Remix to use Node
  serverBuildDirectory: "build",
  ignoredRouteFiles: ["**/.*"]
};
