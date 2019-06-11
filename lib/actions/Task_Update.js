/**
 * Auto-generated action file for "BatchService (batch-BatchService)" API.
 *
 * Generated at: 2019-06-11T15:14:43.124Z
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
 * Operation: 'Task_Update'
 * Endpoint Path: '/jobs/{jobId}/tasks/{taskId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "jobId",
    "taskId",
    "timeout",
    "client-request-id",
    "return-client-request-id",
    "ocp-date",
    "If-Match",
    "If-None-Match",
    "If-Modified-Since",
    "If-Unmodified-Since",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "jobId": "jobId",
    "taskId": "taskId",
    "timeout": "timeout",
    "client_request_id": "client-request-id",
    "return_client_request_id": "return-client-request-id",
    "ocp_date": "ocp-date",
    "If_Match": "If-Match",
    "If_None_Match": "If-None-Match",
    "If_Modified_Since": "If-Modified-Since",
    "If_Unmodified_Since": "If-Unmodified-Since",
    "api_version": "api-version",
    "maxTaskRetryCount": "maxTaskRetryCount",
    "maxWallClockTime": "maxWallClockTime",
    "retentionTime": "retentionTime",
    "constraints": "constraints",
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
        operationId: 'Task_Update',
        pathName: '/jobs/{jobId}/tasks/{taskId}',
        method: 'put',
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