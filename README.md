# ![LOGO](logo.png) BatchService **flow**ground Connector

## Description

A generated **flow**ground connector for the BatchService API (version 2018-08-01.7.0).

Generated from: https://api.apis.guru/v2/specs/windows.net/batch-BatchService/2018-08-01.7.0/swagger.json<br/>
Generated at: 2019-06-11T18:14:43+03:00

## API Description

A client for issuing REST requests to the Azure Batch service.

## Authorization

This API does not require authorization.

## Actions

### Lists all of the applications available in the specified account.

> This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.

*Tags:* `Applications`

#### Input Parameters
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 applications can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified application.

> This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.

*Tags:* `Applications`

#### Input Parameters
* `applicationId` - _required_ - The ID of the application.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists all of the certificates that have been added to the specified account.

*Tags:* `Certificates`

#### Input Parameters
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
* `$select` - _optional_ - An OData $select clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 certificates can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Adds a certificate to the specified account.

*Tags:* `Certificates`

#### Input Parameters
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes a certificate from the specified account.

> You cannot delete a certificate if a resource (pool or compute node) is using it. Before you can delete a certificate, you must therefore make sure that the certificate is not associated with any existing pools, the certificate is not installed on any compute nodes (even if you remove a certificate from a pool, it is not removed from existing compute nodes in that pool until they restart), and no running tasks depend on the certificate. If you try to delete a certificate that is in use, the deletion fails. The certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the certificate.

*Tags:* `Certificates`

#### Input Parameters
* `thumbprintAlgorithm` - _required_ - The algorithm used to derive the thumbprint parameter. This must be sha1.
* `thumbprint` - _required_ - The thumbprint of the certificate to be deleted.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified certificate.

*Tags:* `Certificates`

#### Input Parameters
* `thumbprintAlgorithm` - _required_ - The algorithm used to derive the thumbprint parameter. This must be sha1.
* `thumbprint` - _required_ - The thumbprint of the certificate to get.
* `$select` - _optional_ - An OData $select clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Cancels a failed deletion of a certificate from the specified account.

> If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.

*Tags:* `Certificates`

#### Input Parameters
* `thumbprintAlgorithm` - _required_ - The algorithm used to derive the thumbprint parameter. This must be sha1.
* `thumbprint` - _required_ - The thumbprint of the certificate being deleted.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists all of the jobs in the specified account.

*Tags:* `Jobs`

#### Input Parameters
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Adds a job to the specified account.

> The Batch service supports two ways to control the work done as part of a job. In the first approach, the user specifies a Job Manager task. The Batch service launches this task when it is ready to start the job. The Job Manager task controls all other tasks that run under this job, by using the Task APIs. In the second approach, the user directly controls the execution of tasks under an active job, by using the Task APIs. Also note: when naming jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.

*Tags:* `Jobs`

#### Input Parameters
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes a job.

> Deleting a job also deletes all tasks that are part of that job, and all job statistics. This also overrides the retention period for task data; that is, if the job contains tasks which are still retained on compute nodes, the Batch services deletes those tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the job to the deleting state. All update operations on a job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the job is being deleted.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job to delete.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified job.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified job.

> This replaces only the job properties specified in the request. For example, if the job has constraints, and a request does not specify the constraints element, then the job keeps the existing constraints.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job whose properties you want to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified job.

> This fully replaces all the updatable properties of the job. For example, if the job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job whose properties you want to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Adds a collection of tasks to the specified job.

> Note that each task must have a unique ID. The Batch service may not return the results for each task in the same order the tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same task IDs during a retry so that if the prior operation succeeded, the retry will not create extra tasks unexpectedly. If the response contains any tasks which failed to add, a client can retry the request. In a retry, it is most efficient to resubmit only tasks that failed to add, and to omit tasks that were successfully added on the first attempt. The maximum lifetime of a task from addition to completion is 7 days. If a task has not completed within 7 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job to which the task collection is to be added.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Disables the specified job, preventing new tasks from running.

> The Batch Service immediately moves the job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running tasks of the job. The job remains in the disabling state until the disable operation is completed and all tasks have been dealt with according to the disableTasks option; the job then moves to the disabled state. No new tasks are started under the job until it moves back to active state. If you try to disable a job that is in any state other than active, disabling, or disabled, the request fails with status code 409.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job to disable.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Enables the specified job, allowing new tasks to run.

> When you call this API, the Batch service sets a disabled job to the enabling state. After the this operation is completed, the job moves to the active state, and scheduling of new tasks under the job resumes. The Batch service does not allow a task to remain in the active state for more than 7 days. Therefore, if you enable a job containing active tasks which were added more than 7 days ago, those tasks will not run.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job to enable.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.

> This API returns the Job Preparation and Job Release task status on all compute nodes that have run the Job Preparation or Job Release task. This includes nodes which have since been removed from the pool. If this API is invoked on a job which has no Job Preparation or Job Release task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
* `$select` - _optional_ - An OData $select clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets the task counts for the specified job.

> Task counts provide a count of the tasks by active, running or completed task state, and a count of tasks which succeeded or failed. Tasks in the preparing state are counted as running.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists all of the tasks that are associated with the specified job.

> For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Adds a task to the specified job.

> The maximum lifetime of a task from addition to completion is 7 days. If a task has not completed within 7 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job to which the task is to be added.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes a task from the specified job.

> When a task is deleted, all of the files in its directory on the compute node where it ran are also deleted (regardless of the retention time). For multi-instance tasks, the delete task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job from which to delete the task.
* `taskId` - _required_ - The ID of the task to delete.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified task.

> For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job that contains the task.
* `taskId` - _required_ - The ID of the task to get information about.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified task.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job containing the task.
* `taskId` - _required_ - The ID of the task to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Lists the files in a task's directory on its compute node.

*Tags:* `Files`

#### Input Parameters
* `jobId` - _required_ - The ID of the job that contains the task.
* `taskId` - _required_ - The ID of the task whose files you want to list.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
* `recursive` - _optional_ - Whether to list children of the task directory. This parameter can be used in combination with the filter parameter to list specific type of files.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes the specified task file from the compute node where the task ran.

*Tags:* `Files`

#### Input Parameters
* `jobId` - _required_ - The ID of the job that contains the task.
* `taskId` - _required_ - The ID of the task whose file you want to delete.
* `filePath` - _required_ - The path to the task file or directory that you want to delete.
* `recursive` - _optional_ - Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Returns the content of the specified task file.

*Tags:* `Files`

#### Input Parameters
* `jobId` - _required_ - The ID of the job that contains the task.
* `taskId` - _required_ - The ID of the task whose file you want to retrieve.
* `filePath` - _required_ - The path to the task file that you want to get the content of.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `ocp-range` - _optional_ - The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets the properties of the specified task file.

*Tags:* `Files`

#### Input Parameters
* `jobId` - _required_ - The ID of the job that contains the task.
* `taskId` - _required_ - The ID of the task whose file you want to get the properties of.
* `filePath` - _required_ - The path to the task file that you want to get the properties of.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Reactivates a task, allowing it to run again even if its retry count has been exhausted.

> Reactivation makes a task eligible to be retried again up to its maximum retry count. The task's state is changed to active. As the task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a task is reactivated, its retry count is reset to 0. Reactivation will fail for tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the job has completed (or is terminating or deleting).

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job containing the task.
* `taskId` - _required_ - The ID of the task to reactivate.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Lists all of the subtasks that are associated with the specified multi-instance task.

> If the task is not a multi-instance task then this returns an empty collection.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job.
* `taskId` - _required_ - The ID of the task.
* `$select` - _optional_ - An OData $select clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Terminates the specified task.

> When the task has been terminated, it moves to the completed state. For multi-instance tasks, the terminate task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background.

*Tags:* `Tasks`

#### Input Parameters
* `jobId` - _required_ - The ID of the job containing the task.
* `taskId` - _required_ - The ID of the task to terminate.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Terminates the specified job, marking it as completed.

> When a Terminate Job request is received, the Batch service sets the job to the terminating state. The Batch service then terminates any running tasks associated with the job and runs any required job release tasks. Then the job moves into the completed state. If there are any tasks in the job in the active state, they will remain in the active state. Once a job is terminated, new tasks cannot be added and any remaining active tasks will not be scheduled.

*Tags:* `Jobs`

#### Input Parameters
* `jobId` - _required_ - The ID of the job to terminate.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Lists all of the job schedules in the specified account.

*Tags:* `JobSchedules`

#### Input Parameters
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 job schedules can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Adds a job schedule to the specified account.

*Tags:* `JobSchedules`

#### Input Parameters
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes a job schedule from the specified account.

> When you delete a job schedule, this also deletes all jobs and tasks under that schedule. When tasks are deleted, all the files in their working directories on the compute nodes are also deleted (the retention period is ignored). The job schedule statistics are no longer accessible once the job schedule is deleted, though they are still counted towards account lifetime statistics.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to delete.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified job schedule.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to get.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Checks the specified job schedule exists.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule which you want to check.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified job schedule.

> This replaces only the job schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified job schedule.

> This fully replaces all the updatable properties of the job schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Disables a job schedule.

> No new jobs will be created until the job schedule is enabled again.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to disable.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Enables a job schedule.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to enable.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Lists the jobs that have been created under the specified job schedule.

*Tags:* `Jobs`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule from which you want to get a list of jobs.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Terminates a job schedule.

*Tags:* `JobSchedules`

#### Input Parameters
* `jobScheduleId` - _required_ - The ID of the job schedule to terminates.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets lifetime summary statistics for all of the jobs in the specified account.

> Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.

*Tags:* `Jobs`

#### Input Parameters
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets lifetime summary statistics for all of the pools in the specified account.

> Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.

*Tags:* `Pools`

#### Input Parameters
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists all node agent SKUs supported by the Azure Batch service.

*Tags:* `Accounts`

#### Input Parameters
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-node-agent-skus.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 results will be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets the number of nodes in each state, grouped by pool.

*Tags:* `Accounts`

#### Input Parameters
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch.
* `maxresults` - _optional_ - The maximum number of items to return in the response.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists all of the pools in the specified account.

*Tags:* `Pools`

#### Input Parameters
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 pools can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Adds a pool to the specified account.

> When naming pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.

*Tags:* `Pools`

#### Input Parameters
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes a pool from the specified account.

> When you request that a pool be deleted, the following actions occur: the pool state is set to deleting; any ongoing resize operation on the pool are stopped; the Batch service starts resizing the pool to zero nodes; any tasks running on existing nodes are terminated and requeued (as if a resize pool operation had been requested with the default requeue option); finally, the pool is removed from the system. Because running tasks are requeued, the user can rerun these tasks by updating their job to target a different pool. The tasks can then run on the new pool. If you want to override the requeue behavior, then you should call resize pool explicitly to shrink the pool to zero size before deleting the pool. If you call an Update, Patch or Delete API on a pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to delete.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified pool.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to get.
* `$select` - _optional_ - An OData $select clause.
* `$expand` - _optional_ - An OData $expand clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets basic properties of a pool.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to get.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified pool.

> This only replaces the pool properties specified in the request. For example, if the pool has a start task associated with it, and a request does not specify a start task element, then the pool keeps the existing start task.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Disables automatic scaling for a pool.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool on which to disable automatic scaling.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Enables automatic scaling for a pool.

> You cannot enable automatic scaling on a pool if a resize operation is in progress on the pool. If automatic scaling of the pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same pool more than once every 30 seconds.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool on which to enable automatic scaling.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets the result of evaluating an automatic scaling formula on the pool.

> This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the pool. The pool must have auto scaling enabled in order to evaluate a formula.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool on which to evaluate the automatic scaling formula.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists the compute nodes in the specified pool.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool from which you want to list nodes.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
* `$select` - _optional_ - An OData $select clause.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 nodes can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets information about the specified compute node.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node that you want to get information about.
* `$select` - _optional_ - An OData $select clause.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Disables task scheduling on the specified compute node.

> You can disable task scheduling on a node only if its current scheduling state is enabled.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node on which you want to disable task scheduling.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Enables task scheduling on the specified compute node.

> You can enable task scheduling on a node only if its current scheduling state is disabled

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node on which you want to enable task scheduling.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Lists all of the files in task directories on the specified compute node.

*Tags:* `Files`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node whose files you want to list.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
* `recursive` - _optional_ - Whether to list children of a directory.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes the specified file from the compute node.

*Tags:* `Files`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node from which you want to delete the file.
* `filePath` - _required_ - The path to the file or directory that you want to delete.
* `recursive` - _optional_ - Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Returns the content of the specified compute node file.

*Tags:* `Files`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node that contains the file.
* `filePath` - _required_ - The path to the compute node file that you want to get the content of.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `ocp-range` - _optional_ - The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets the properties of the specified compute node file.

*Tags:* `Files`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node that contains the file.
* `filePath` - _required_ - The path to the compute node file that you want to get the properties of.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Gets the Remote Desktop Protocol file for the specified compute node.

> Before you can access a node by using the RDP file, you must create a user account on the node. This API can only be invoked on pools created with a cloud service configuration. For pools created with a virtual machine configuration, see the GetRemoteLoginSettings API.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node for which you want to get the Remote Desktop Protocol file.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Restarts the specified compute node.

> You can restart a node only if it is in an idle or running state.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node that you want to restart.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Reinstalls the operating system on the specified compute node.

> You can reinstall the operating system on a node only if it is in an idle or running state. This API can be invoked only on pools created with the cloud service configuration property.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node that you want to restart.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Gets the settings required for remote login to a compute node.

> Before you can remotely login to a node using the remote login settings, you must create a user account on the node. This API can be invoked only on pools created with the virtual machine configuration property. For pools created with a cloud service configuration, see the GetRemoteDesktop API.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node for which to obtain the remote login settings.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Upload Azure Batch service log files from the specified compute node to Azure Blob Storage.

> This is for gathering Azure Batch service log files in an automated fashion from nodes if you are experiencing an error and wish to escalate to Azure support. The Azure Batch service log files should be shared with Azure support to aid in debugging issues with the Batch service.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the compute node from which you want to upload the Azure Batch service log files.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Adds a user account to the specified compute node.

> You can add a user account to a node only when it is in the idle or running state.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the machine on which you want to create a user account.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Deletes a user account from the specified compute node.

> You can delete a user account to a node only when it is in the idle or running state.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the machine on which you want to delete a user account.
* `userName` - _required_ - The name of the user account to delete.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Updates the password and expiration time of a user account on the specified compute node.

> This operation replaces of all the updatable properties of the account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user account on a node only when it is in the idle or running state.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool that contains the compute node.
* `nodeId` - _required_ - The ID of the machine on which you want to update a user account.
* `userName` - _required_ - The name of the user account to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Removes compute nodes from the specified pool.

> This operation can only run when the allocation state of the pool is steady. When this operation runs, the allocation state changes from steady to resizing.

*Tags:* `ComputeNodes`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool from which you want to remove nodes.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Changes the number of compute nodes that are assigned to a pool.

> You can only resize a pool when its allocation state is steady. If the pool is already resizing, the request fails with status code 409. When you resize a pool, the pool's allocation state changes from steady to resizing. You cannot resize pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a pool downwards, the Batch service chooses which nodes to remove. To remove specific nodes, use the pool remove nodes API instead.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to resize.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Stops an ongoing resize operation on the pool.

> This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool whose resizing you want to stop.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Updates the properties of the specified pool.

> This fully replaces all the updatable properties of the pool. For example, if the pool has a start task associated with it and if start task is not specified with this request, then the Batch service will remove the existing start task.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to update.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

### Upgrades the operating system of the specified pool.

> During an upgrade, the Batch service upgrades each compute node in the pool. When a compute node is chosen for upgrade, any tasks running on that node are removed from the node and returned to the queue to be rerun later (or on a different compute node). The node will be unavailable until the upgrade is complete. This operation results in temporarily reduced pool capacity as nodes are taken out of service to be upgraded. Although the Batch service tries to avoid upgrading all compute nodes at the same time, it does not guarantee to do this (particularly on small pools); therefore, the pool may be temporarily unavailable to run tasks. When this operation runs, the pool state changes to upgrading. When all compute nodes have finished upgrading, the pool state returns to active. While the upgrade is in progress, the pool's currentOSVersion reflects the OS version that nodes are upgrading from, and targetOSVersion reflects the OS version that nodes are upgrading to. Once the upgrade is complete, currentOSVersion is updated to reflect the OS version now running on all nodes. This operation can only be invoked on pools created with the cloudServiceConfiguration property.

*Tags:* `Pools`

#### Input Parameters
* `poolId` - _required_ - The ID of the pool to upgrade.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `If-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* `If-None-Match` - _optional_ - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* `If-Modified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* `If-Unmodified-Since` - _optional_ - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* `api-version` - _required_ - Client API Version.

### Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.

> If you do not specify a $filter clause including a poolId, the response includes all pools that existed in the account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned.

*Tags:* `Pools`

#### Input Parameters
* `starttime` - _optional_ - The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available.
* `endtime` - _optional_ - The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available.
* `$filter` - _optional_ - An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 results will be returned.
* `timeout` - _optional_ - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* `client-request-id` - _optional_ - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* `return-client-request-id` - _optional_ - Whether the server should return the client-request-id in the response.
* `ocp-date` - _optional_ - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* `api-version` - _required_ - Client API Version.

## License

**flow**ground :- Telekom iPaaS / windows-net-batch-batch-service-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
