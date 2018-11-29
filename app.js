'use strict';

const logDubboRpcClient = require('./lib/rpc_client');
const logDubboRpcServer = require('./lib/rpc_server');

module.exports = app => {
  logDubboRpcClient(app);
  logDubboRpcServer(app);
};
