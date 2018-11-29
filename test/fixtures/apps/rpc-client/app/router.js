'use strict';

module.exports = app => {
  app.get('/', async function(ctx) {
    const result = await ctx.proxy.userService.echoUser({
      id: 123456,
      name: '宗羽',
      address: '蚂蚁 C 空间',
      salary: 100000000,
    });
    ctx.body = result;
  });

  app.get('/without_ctx', async function(ctx) {
    const consumer = app.rpcClient.createConsumer({
      interfaceName: 'org.eggjs.dubbo.UserService',
      targetAppName: 'dubbo',
      version: '1.0.0',
      group: 'HSF',
      proxyName: 'UserService',
      serverHost: '127.0.0.1:12200',
    });
    ctx.body = await consumer.invoke('sayHello', [ 'world' ]);
  });
};
