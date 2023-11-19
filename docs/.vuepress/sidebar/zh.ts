import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar(
 [{
    text: "MySQL",
    link: "/notes/MySQL",
    // activeMatch: "^/notes/MySQL/$",
    children: [
      {
        text: "MySQL1",
        link: "/notes/MySQL/MySQL1.md",
        collapsible: false
        // activeMatch: "^/notes/MySQL/$",
      },
      {
        text: "MySQL2",
        link: "/notes/MySQL/MySQL2.md",
        collapsible: false
        // activeMatch: "^/notes/MySQL/$",
      }
    ]
  }]
);
