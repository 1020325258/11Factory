import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "Java基础",
    link: "/notes/后端开发/Java/多线程/CompletableFuture原理与实践/CompletableFuture原理与实践.md",
    // activeMatch: "^/notes/MySQL/$"
  },
  {
    text: "中间件",
    link: "/notes/后端开发/Redis/",
    // children: [
    //   {
    //     text: "Redis",
    //     link: "/notes/后端开发/Redis/RedisCore/RedisCore.md",
    //     // activeMatch: "^/notes/MySQL/$"
    //   },
    //   {
    //     text: "Netty",
    //     link: "/notes/后端开发/Netty/Netty.md",
    //     // activeMatch: "^/notes/MySQL/$"
    //   },
    //   {
    //     text: "MySQL",
    //     link: "/notes/后端开发/MySQL/MySQL.md",
    //     // activeMatch: "^/notes/MySQL/$"
    //   },
    //   {
    //     text: "消息队列",
    //     link: "/notes/后端开发/MessageQueue/RocketMQ.md",
    //     // activeMatch: "^/notes/MySQL/$"
    //   },
    //   {
    //     text: "Zookeeper",
    //     link: "/notes/后端开发/Zookeeper/Zookeeper.md",
    //     // activeMatch: "^/notes/MySQL/$"
    //   },
    // ]
  },
  {
    text: "压测与性能优化",
    link: "/notes/后端开发/压测与性能优化/压测与性能优化.md",
    // activeMatch: "^/notes/MySQL/$"
  },
  {
    text: "项目学习总结",
    link: "/notes/项目学习总结/Api网关系统/Api网关.md",
    // activeMatch: "^/notes/MySQL/$"
  },
  {
    text: "面试题",
    link: "/notes/面试题/0.待整理内容.md",
    // activeMatch: "^/notes/MySQL/$"
  },
  {
    text: "分布式系统",
    link: "/notes/分布式系统/待办.md",
    // activeMatch: "^/notes/MySQL/$"
  },
]);
