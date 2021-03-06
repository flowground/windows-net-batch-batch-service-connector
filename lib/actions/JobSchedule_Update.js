/**
 * Auto-generated action file for "BatchService (batch-BatchService)" API.
 *
 * Generated at: 2019-06-11T15:14:43.139Z
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
 * Operation: 'JobSchedule_Update'
 * Endpoint Path: '/jobschedules/{jobScheduleId}'
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
    "jobScheduleId",
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
    "jobScheduleId": "jobScheduleId",
    "timeout": "timeout",
    "client_request_id": "client-request-id",
    "return_client_request_id": "return-client-request-id",
    "ocp_date": "ocp-date",
    "If_Match": "If-Match",
    "If_None_Match": "If-None-Match",
    "If_Modified_Since": "If-Modified-Since",
    "If_Unmodified_Since": "If-Unmodified-Since",
    "api_version": "api-version",
    "commonEnvironmentSettings": "commonEnvironmentSettings",
    "maxTaskRetryCount": "maxTaskRetryCount",
    "maxWallClockTime": "maxWallClockTime",
    "constraints": "constraints",
    "displayName": "displayName",
    "allowLowPriorityNode": "allowLowPriorityNode",
    "applicationPackageReferences": "applicationPackageReferences",
    "access": "access",
    "authenticationTokenSettings": "authenticationTokenSettings",
    "commandLine": "commandLine",
    "retentionTime": "retentionTime",
    "containerRunOptions": "containerRunOptions",
    "imageName": "imageName",
    "password": "password",
    "registryServer": "registryServer",
    "username": "username",
    "registry": "registry",
    "containerSettings": "containerSettings",
    "environmentSettings": "environmentSettings",
    "id": "id",
    "killJobOnCompletion": "killJobOnCompletion",
    "outputFiles": "outputFiles",
    "resourceFiles": "resourceFiles",
    "runExclusive": "runExclusive",
    "elevationLevel": "elevationLevel",
    "scope": "scope",
    "autoUser": "autoUser",
    "userIdentity": "userIdentity",
    "jobManagerTask": "jobManagerTask",
    "rerunOnNodeRebootAfterSuccess": "rerunOnNodeRebootAfterSuccess",
    "waitForSuccess": "waitForSuccess",
    "jobPreparationTask": "jobPreparationTask",
    "jobReleaseTask": "jobReleaseTask",
    "metadata": "metadata",
    "onAllTasksComplete": "onAllTasksComplete",
    "onTaskFailure": "onTaskFailure",
    "autoPoolIdPrefix": "autoPoolIdPrefix",
    "keepAlive": "keepAlive",
    "applicationLicenses": "applicationLicenses",
    "autoScaleEvaluationInterval": "autoScaleEvaluationInterval",
    "autoScaleFormula": "autoScaleFormula",
    "certificateReferences": "certificateReferences",
    "currentOSVersion": "currentOSVersion",
    "osFamily": "osFamily",
    "targetOSVersion": "targetOSVersion",
    "cloudServiceConfiguration": "cloudServiceConfiguration",
    "enableAutoScale": "enableAutoScale",
    "enableInterNodeCommunication": "enableInterNodeCommunication",
    "maxTasksPerNode": "maxTasksPerNode",
    "inboundNATPools": "inboundNATPools",
    "endpointConfiguration": "endpointConfiguration",
    "subnetId": "subnetId",
    "networkConfiguration": "networkConfiguration",
    "resizeTimeout": "resizeTimeout",
    "startTask": "startTask",
    "targetDedicatedNodes": "targetDedicatedNodes",
    "targetLowPriorityNodes": "targetLowPriorityNodes",
    "nodeFillType": "nodeFillType",
    "taskSchedulingPolicy": "taskSchedulingPolicy",
    "userAccounts": "userAccounts",
    "containerImageNames": "containerImageNames",
    "containerRegistries": "containerRegistries",
    "type": "type",
    "containerConfiguration": "containerConfiguration",
    "dataDisks": "dataDisks",
    "offer": "offer",
    "publisher": "publisher",
    "sku": "sku",
    "version": "version",
    "virtualMachineImageId": "virtualMachineImageId",
    "imageReference": "imageReference",
    "licenseType": "licenseType",
    "nodeAgentSKUId": "nodeAgentSKUId",
    "caching": "caching",
    "osDisk": "osDisk",
    "enableAutomaticUpdates": "enableAutomaticUpdates",
    "windowsConfiguration": "windowsConfiguration",
    "virtualMachineConfiguration": "virtualMachineConfiguration",
    "vmSize": "vmSize",
    "pool": "pool",
    "poolLifetimeOption": "poolLifetimeOption",
    "autoPoolSpecification": "autoPoolSpecification",
    "poolId": "poolId",
    "poolInfo": "poolInfo",
    "priority": "priority",
    "usesTaskDependencies": "usesTaskDependencies",
    "jobSpecification": "jobSpecification",
    "doNotRunAfter": "doNotRunAfter",
    "doNotRunUntil": "doNotRunUntil",
    "recurrenceInterval": "recurrenceInterval",
    "startWindow": "startWindow",
    "schedule": "schedule",
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
        operationId: 'JobSchedule_Update',
        pathName: '/jobschedules/{jobScheduleId}',
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