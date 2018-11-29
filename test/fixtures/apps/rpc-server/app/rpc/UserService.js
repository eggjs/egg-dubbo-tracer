'use strict';

exports.echoUser = async function(user) {
  await this.curl('http://alibaba.com');
  return user;
};

exports.sayHello = async function(name) {
  return 'hello ' + name;
};
