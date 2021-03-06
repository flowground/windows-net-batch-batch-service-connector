/**
 * Auto-generated action file for "BatchService (batch-BatchService)" API.
 *
 * Generated at: 2019-06-11T15:14:43.174Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / windows-net-batch-batch-service-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Pool_UpdateProperties'
 * Endpoint Path: '/pools/{poolId}/updateproperties'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "poolId",
    "timeout",
    "client-request-id",
    "return-client-request-id",
    "ocp-date",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "poolId": "poolId",
    "timeout": "timeout",
    "client_request_id": "client-request-id",
    "return_client_request_id": "return-client-request-id",
    "ocp_date": "ocp-date",
    "api_version": "api-version",
    "applicationPackageReferences": "applicationPackageReferences",
    "certificateReferences": "certificateReferences",
    "metadata": "metadata",
    "commandLine": "commandLine",
    "containerRunOptions": "containerRunOptions",
    "imageName": "imageName",
    "password": "password",
    "registryServer": "registryServer",
    "username": "username",
    "registry": "registry",
    "containerSettings": "containerSettings",
    "environmentSettings": "environmentSettings",
    "maxTaskRetryCount": "maxTaskRetryCount",
    "resourceFiles": "resourceFiles",
    "elevationLevel": "elevationLevel",
    "scope": "scope",
    "autoUser": "autoUser",
    "userIdentity": "userIdentity",
    "waitForSuccess": "waitForSuccess",
    "startTask": "startTask",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json; odata=minimalmetadata';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'Pool_UpdateProperties',
        pathName: '/pools/{poolId}/updateproperties',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}