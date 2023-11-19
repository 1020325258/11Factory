import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/notes/MySQL/": [
    "",
    {
      text: "MySQL1",
      icon: "laptop-code",
      prefix: "notes/MySQL/",
      link: "/notes/MySQL/MySQL1.md",
      children: "structure",
    },
    {
      text: "MySQL2",
      icon: "laptop-code",
      prefix: "notes/MySQL/",
      link: "/notes/MySQL/MySQL2.md",
      children: "structure",
    }
  ],
  // "/Redis/": [
  //   {
  //     text: "Redis核心知识",
  //     link: "/notes/后端开发/Redis/RedisCore/Redis核心知识.md",
  //     collapsible: false
  //   }
  // ]
  // {
  //   text: "MySQL",
  //   link: "/notes/MySQL",
  //   children: [
  //     {
  //       text: "MySQL1",
  //       link: "/notes/MySQL/MySQL1.md",
  //       collapsible: false
  //       // activeMatch: "^/notes/MySQL/$",
  //     },
  //     {
  //       text: "MySQL2",
  //       link: "/notes/MySQL/MySQL2.md",
  //       collapsible: false
  //       // activeMatch: "^/notes/MySQL/$",
  //     }
  //   ]
  // },
  // {
  //   text: "Redis",
  //   link: "/notes/后端开发/Redis/",
  //   // activeMatch: "^/notes/后端开发/Redis/$",
  //   children: [
  //     {
  //       text: "Redis核心知识",
  //       link: "/notes/后端开发/Redis/RedisCore/Redis核心知识.md",
  //       collapsible: false
  //       // activeMatch: "^/notes/MySQL/$",
  //     },
  //   ]
  // }

});
