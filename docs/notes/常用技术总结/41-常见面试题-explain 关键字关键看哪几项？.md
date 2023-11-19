## explain 关键字关键看哪几项，分别有什么意义？

explain 可以帮助我们查看查询语句的具体执行计划

主要看 type、possible_keys、key、Extra 这三个列

- type 表示访问类型，即 MySQL 决定如何查找表中的行。从最优到最差分别为：`system > const > eq_ref > ref > range > index > ALL`

  一般来说得保证查询达到 range 级别，最好达到 ref

  ALL 级别表示进行全表扫描（扫描聚集索引的所有叶子节点）

  index：表示扫描全索引就可以拿到结果，一般是扫描二级索引就拿到了结果

  range：范围扫描通常出现在 `in()`、`between`、`>`、`<`等操作

  ref：使用了普通索引或者唯一索引的部分前缀

- possible_keys 表示可能使用的索引

- key 表示使用的索引

  有时 possible_keys 有列，但是 key 为null 是什么原因呢？这是因为 MySQL 认为表中数据并不多，不需要走索引，因为如果走二级索引的话，还需要再次回表查询聚集索引，没必要使用索引，所以直接进行全表扫描

- Extra，主要看使用 order by 进行排序时有没有出现 Using filesort 和 Using index

  **尽量通过 order by 和 where 配合，可以出现 Using index，避免 Using filesort**

  - Using index 表示使用了覆盖索引，速度比较快
  - Using filesort 表示使用了外部排序，而不是使用索引进行排序

  那么什么时候会出现 Using index 呢？

  - order by 语句满足索引最左前缀
  - where 和 order by 条件列组合满足索引最左前缀

  ​

## extra 可能出现哪些信息？

会出现以下几种信息：

> 但是应该也记不住这么多，Using index 和 Using filesort 是 mysql 选择排序的方式，我猜面试官可能是想问这两个

- Using index：使用覆盖索引
- Using where：使用 where 语句来处理结果，并且查询的列未被索引覆盖
- Using index condition：查询的列不完全被索引覆盖，where 条件中是一个前导列的范围
  - 示例：索引（name，balance） `explain select *from account where name > 'a';`
- Using temporary：mysql 需要创建一张临时表来处理查询。出现这种情况需要使用索引进行优化
  - 示例：name 字段没有索引，此时创建一张临时表来 distinct，`explain select distinct name from account`
- Using filesort：使用外部排序而不是索引排序，数据较少时在内存中排序，数据较大时在磁盘中排序，一般情况下也是需要考虑使用索引进行优化
  - 示例：name 字段没有索引，`explain select name from account order by name`
- Select tables optimized away：使用聚合函数来访问存在索引的某个字段
  - 示例：`explain select min(id) from account;`

