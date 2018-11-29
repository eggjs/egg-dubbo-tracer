'use strict';

/**
 * egg-dubbo-tracer default config
 * @member Config#dubboTracer
 * @property {String} SOME_KEY - some description
 */
exports.dubboTracer = {

};

exports.opentracing = {
  carrier: {
    RPC: require('../lib/carrier/rpc_carrier'),
  },
};
