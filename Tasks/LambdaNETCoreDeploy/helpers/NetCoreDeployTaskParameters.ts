/*
  * Copyright 2017 Amazon.com, Inc. and its affiliates. All Rights Reserved.
  *
  * Licensed under the MIT License. See the LICENSE accompanying this file
  * for the specific language governing permissions and limitations under
  * the License.
  */

import tl = require('vsts-task-lib/task');
import sdkutils = require('sdkutils/sdkutils');

export class TaskParameters extends sdkutils.AWSTaskParametersBase {
    public lambdaProjectPath: string;

    public command: string;

    public functionHandler: string;
    public functionName: string;
    public functionRole: string;
    public functionMemory: number;
    public functionTimeout: number;

    public stackName: string;
    public s3Bucket: string;
    public s3Prefix: string;

    public additionalArgs: string;

    constructor() {
        super();
        try {
            this.lambdaProjectPath = tl.getPathInput('lambdaProjectPath', true, true);

            this.command = tl.getInput('command', true);

            this.functionName = tl.getInput('functionName', false);
            this.functionRole = tl.getInput('functionRole', false);
            this.functionHandler = tl.getInput('functionHandler', false);

            if(tl.getInput('functionMemory', false)) {
                this.functionMemory = parseInt(tl.getInput('functionMemory', false), 10);
            }
            if(tl.getInput('functionTimeout', false)) {
                this.functionTimeout = parseInt(tl.getInput('functionTimeout', false), 10);
            }

            this.stackName = tl.getInput('stackName', false);
            this.s3Bucket = tl.getInput('s3Bucket', false);
            this.s3Prefix = tl.getInput('s3Prefix', false);

            this.additionalArgs = tl.getInput('additionalArgs', false);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
