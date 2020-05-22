# alfred-workflows

一些有用的alfred工作流

Some useful alfred workflows


# List

- 时间戳转换工具 / Timestamp transfer from/to Date
    
    - Usage
    
        use keyword `tt`
        ```
        tt 2019-06-26 12:00:00 -> 1561521600000
        tt 1561521600000       -> 2019-06-26 12:00:00
        tt                     -> 1561521600000 / 2019-06-26 12:00:00
        ```
    
    - Dependency
        
        NodeJs
    
    - [Download](https://github.com/hanfeihang/alfred-workflows/raw/master/timestamp/timestamp.alfredworkflow)
    
- IP查询工具 / IP Tools
    
    - Usage
        
        use keyword `ip`
        ```
        ip                     -> 1.2.1.2(局域网) / 1.2.3.4（公网）
        ip 8.8.8.8             -> 1.2.1.2(局域网) / 1.2.3.4（公网）/8.8.8.8(美国弗吉尼亚州)
        ```

    - Dependency
        
        Python2.7
    
    - [Download](https://github.com/hanfeihang/alfred-workflows/raw/master/ip/ip.alfredworkflow)