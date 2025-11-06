import * as cdk from 'aws-cdk-lib/core';
import { Template } from 'aws-cdk-lib/assertions';
import * as Cdk from '../lib/stack';

test('SQS Queue created', () => {
//  Arrange, Act 
  const app = new cdk.App();
  const stack = new Cdk.Stack(app, 'TestStack');
  const template = Template.fromStack(stack);

//  Assert
  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
});
