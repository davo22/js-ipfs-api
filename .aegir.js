'use strict';
const path = require('path');

const createServer = require('ipfsd-ctl').createServer;

const server = createServer();

module.exports = {
    webpack: {
        output: {
            path: path.resolve(__dirname, 'dist'),
            library: 'IpfsApi',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        resolve: {
            mainFields: ['browser', 'main']
        }
    },
    karma: {
        files: [{
            pattern: 'node_modules/interface-ipfs-core/js/test/fixtures/**/*',
            watched: false,
            served: true,
            included: false
        }],
        browserNoActivityTimeout: 210 * 1000,
        singleRun: true
    },
    hooks: {
        pre: server.start.bind(server),
        post: server.stop.bind(server)
    }
};
