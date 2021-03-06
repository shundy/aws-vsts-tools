.. Copyright 2010-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

   This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0
   International License (the "License"). You may not use this file except in compliance with the
   License. A copy of the License is located at http://creativecommons.org/licenses/by-nc-sa/4.0/.

   This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   either express or implied. See the License for the specific language governing permissions and
   limitations under the License.

.. _cloudformation-delete-stack:

###########################
|CFNlong| Delete Stack Task
###########################

.. meta::
   :description: AWS Tools for Visual Studio Team Services (VSTS) Task Reference
   :keywords: extensions, tasks

Synopsis
========

Deletes an |CFNlong| stack.

Description
===========

Deletes the specified stack.

Parameters
==========

You can set the following parameters for the task. Required
parameters are noted by an asterisk (*). Other parameters are optional.


Displayname*
------------

    The default name of the task, |CFNlong| Delete Stack. You can rename it.

AWS Credentials*
----------------

    The AWS credentials to be used by the task when it executes on a build host. If needed, choose :guilabel:`+`, and then add a new
    AWS service endpoint connection.

AWS Region*
-----------

    The AWS region code (us-east-1, us-west-2 etc) of the region containing the AWS resource(s) the task will use or create. For more
    information, see :aws-gr:`Regions and Endpoints <rande>` in the |AWS-gr|.


Stack Name*
-----------

    The name or unique stack ID that is associated with the stack.


