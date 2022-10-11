## 创建控制器

`nest g controller cats`

## 坑点，如果引入, Res 对象，要自主返回，不然无法响应，会一直挂起状态

```ts
 async findOne(@Param('id') id: string,@Res() response:Response) {

   response.status(200).send('hello world!!测试一下');
    return await this.comService.findOne(+id);
  }
```

### 创建模版 CRUD

```
$ nest g resource users
```

## 坑点

- NestJS - Controller - Get(':id') returned 404
  https://stackoverflow.com/questions/67851619/nestjs-controller-getid-returned-404

- https://stackoverflow.com/questions/72864723/which-is-better-in-typeorm-save-or-update/72865592
