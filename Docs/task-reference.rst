.. Copyright 2010-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

   This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0
   International License (the "License"). You may not use this file except in compliance with the
   License. A copy of the License is located at http://creativecommons.org/licenses/by-nc-sa/4.0/.

   This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   either express or implied. See the License for the specific language governing permissions and
   limitations under the License.

.. _task_reference:

##############
Task Reference
##############

.. meta::
   :description: Using the tasks in the AWS Tools for VSTS
   :keywords: extensions, tasks

This reference describes the tasks that are included in the AWS Tools for Microsoft 
Visual Studio Team Services.

.. _task_prerequisites:

**Prerequisites**

* You must have an AWS account. For information on setting up an account,
  see :ref:`setup-credentials`.

* A required parameter for each task is :code:`AWS Credentials`. If you haven't created an AWS Connection,
  choose the :guilabel:`+` to the right of the parameter. A dialog box opens asking you to enter your AWS access
  key and secret key credentials and to provide a name. We do not recommend using your root
  credentials. Instead, use the credentials associated with an IAM user account.

  The secret key text is automatically masked. Choose :guilabel:`OK` to save the credentials
  into your VSTS account and return to the configuration of the new task.

  The name for the new credentials is entered into the :guilabel:`AWS Credentials` box.
  Once created, those credentials are available in the parameter's list whenever you
  set up a task.
  
       .. image:: images/AddNewAWSConnection.png
          :alt: Add an AWS connection

.. toctree::
   :maxdepth: 1
   :titlesonly:

   aws-cli
   awspowershell-module-script
   cloudformation-create-update
   cloudformation-delete-stack
   cloudformation-execute-changeset
   codedeploy-deployment
   ecr-pushimage
   elastic-beanstalk-createversion
   elastic-beanstalk-deploy
   lambda-deploy
   lambda-netcore-deploy
   lambda-invoke
   s3-download
   s3-upload
   systemsmanager-getparameter
   systemsmanager-runcommand
   send-message



