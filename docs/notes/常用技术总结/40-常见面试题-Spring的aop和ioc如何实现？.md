## Spring 的 aop 和 ioc 怎么实现？

**Spring 的 IOC 是如何实现的呢？**

Spring 的 IOC 是通过 `工厂 + 反射` 去实现的， 在 IOC 中，Spring 会将创建的 Bean 都放在工厂中，我们可以通过 `@Configuration` 来定义配置类，在配置类中通过 `@Bean` 来将 Bean 创建在 Bean 工厂中，在对 Bean 进行实例化时，使用的就是`反射`。



**扩展：BeanFactory 和 ApplicationContext 这两个接口都是 Spring 提供用于实现 IOC 容器的接口，他们两个有什么区别呢？**

- BeanFactory 时 Spring 里面最底层的接口，包含了 bean 的定义、读取 bean 配置、管理 bean 加载、实例化、控制 bean 的生命周期 等功能，ApplicationContext 是 BeanFactory 的子接口
- BeanFactory 的功能简单，采用延迟加载注入 bean
- 在 BeanFactory 中，需要显示调用 addBeanPostProcessor() 来注册后置处理器，而在 ApplicationContext 中，容器会自动寻找实现了 BeanPostProcessor 接口的 Bean，然后自动注册
- ApplicationContext 提供了更为完整的功能，包含了 BeanFactory 的全部功能
- ApplicationContext 在初始化应用上下文时就实例化所有单实例的Bean，因此在前期初始化 Bean 时开销较大，并且较为占用内存空间



**Spring 的 aop 是如何实现的呢？**

Spring 的 AOP 是通过动态代理实现的，如果对 Spring 的某个 Bean 配置了切面，那么 Spring 在创建这个 bean 的时候，其实创建的是这个 Bean 的代理对象，之后在调用这个 bean 的方法的时候，其实调用的是这个代理对象中重写的代理方法，Spring AOP 使用了 JDK 动态代理和 CGLIB 动态代理

如果需要代理的类实现了接口，Spring 就会使用 JDK 动态代理实现 AOP，如果没有实现接口，则 Spring 会使用 CGLIB 动态代理来实现 AOP

[cglib 和 jdk 动态代理使用及原理](https://blog.csdn.net/qq_45260619/article/details/134361337)

