import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  dest: "./dist",
  port: 3000,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "11来了",
      description: "代码工厂",
    },
  },

  theme,

  shouldPrefetch: false,
});
