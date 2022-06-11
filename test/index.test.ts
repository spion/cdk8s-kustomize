import { Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { Kustomize } from '../src';
import { Testing } from "cdk8s";

class Test extends Chart {
  constructor(scope: Construct, id: string) {
    super(scope, id, {namespace: 'hi'});

    new Kustomize(this, 'pgo-operator-install', {
      url: 'https://github.com/CrunchyData/postgres-operator-examples//kustomize/install/default?ref=12085b73c85f3c30f0a0b1d3f5fe17b22c3eede3'
    })
  }
}
test('hello', () => {
  let app = Testing.app()
  let chart = new Test(app, 'test-chart');
  let yaml = Testing.synth(chart)
  expect(yaml).toContain('PostgresCluster')
});