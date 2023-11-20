import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/notes/后端开发/Redis/": [
    // "",
    {
      text: "Redis",
      icon: "laptop-code",
      prefix: "",
      // link: "后端开发/Redis/RedisCore/RedisCore.md",
      children: [
        {
          text: "Redis基础",
          link: "RedisCore/RedisCore.md",
        },
        {
          text: "Redis订阅发布",
          link: "Redis实现订阅发布/Redis实现订阅发布.md"
        }
      ]
      // collapsible: false,
      // children: "structure",
    },
  ],
  "/notes/后端开发/Netty/": [
    {
      text: "Netty",
      icon: "laptop-code",
      prefix: "/notes/后端开发/Netty/",
      children: [
        {
          text: "Netty基础",
          link: "Netty.md"
        }
      ]
    }
  ],
  "/notes/后端开发/MySQL/": [
    {
      text: "MySQL",
      icon: "laptop-code",
      prefix: "/notes/后端开发/MySQL/",
      children: [
        {
          text: "MySQL基础",
          link: "MySQL.md"
        }
      ]
    }
  ],
  "/notes/后端开发/MessageQueue/": [
    {
      text: "消息队列",
      icon: "laptop-code",
      prefix: "/notes/后端开发/MessageQueue/",
      children: [
        {
          text: "RocketMQ",
          link: "RocketMQ.md"
        }
      ]
    }
  ],
  "/notes/后端开发/Java/": [
    {
      text: "Java多线程",
      icon: "laptop-code",
      prefix: "/notes/后端开发/Java/多线程",
      children: [
        {
          text: "CompletableFuture原理与实践",
          link: "CompletableFuture原理与实践/CompletableFuture原理与实践.md"
        }
      ]
    }
  ],
  "/notes/后端开发/Zookeeper/": [
    {
      text: "Zookeeper",
      icon: "laptop-code",
      prefix: "/notes/后端开发/Zookeeper",
      children: [
        {
          text: "Zookeeper基础",
          link: "Zookeeper.md"
        }
      ]
    }
  ],
  "/notes/后端开发/压测与性能优化/": [
    {
      text: "压测与性能优化",
      icon: "laptop-code",
      // link: "压测与性能优化.md",
      children: "structure"
    }
  ],
  "/notes/项目学习总结/": [
    {
      text: "项目学习总结",
      icon: "laptop-code",
      prefix: "/notes/项目学习总结/",
      children: [
        {
          text: "API网关系统",
          link: "API网关系统/Api网关.md"
        },
        {
          text: "Simple-Rpc",
          link: "simple-rpc和科研平台/simple-rpc项目总结.md"
        }
      ]
    }
  ],
  "/notes/面试题/": [
    {
      text: "面试题",
      icon: "laptop-code",
      prefix: "/notes/面试题/",
      children: [
        {
          text: "待整理内容",
          link: "0.待整理内容.md"
        },
        {
          text: "场景题",
          link: "1.面试题-场景题.md"
        },
        {
          text: "计算机基础",
          link: "2.面试题-计算机基础.md"
        },
        {
          text: "Java基础",
          link: "3.面试题-Java基础.md"
        },
        {
          text: "MySQL",
          link: "4.面试题-MySQL.md"
        },
        {
          text: "Netty",
          link: "5.面试题-Netty.md"
        },
        {
          text: "Redis",
          link: "6.面试题-Redis.md"
        },
        {
          text: "Spring",
          link: "7.面试题-Spring.md"
        },
        {
          text: "MyBatis",
          link: "8.面试题-MyBatis.md"
        },
        {
          text: "SpringBoot",
          link: "9.面试题-SpringBoot.md"
        },
      ]
    }
  ],
});
