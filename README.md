# cdk8s-kustomize

Use kustomize directories in your cdk8s projects

To use this you must have kubectl installed on your system.

```typescript
class MyChart extends cdk8s.Chart {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const myKustomizeDir = new Kustomize(this, 'redis', {
      url: 'https://github.com/CrunchyData/postgres-operator-examples//kustomize/install/default?ref=12085b73c85f3c30f0a0b1d3f5fe17b22c3eede3'
    });
  }
}
```

[GoGetter URLs][1] are [supported by Kustomize][2]

[1]: https://github.com/hashicorp/go-getter
[2]: https://github.com/kubernetes-sigs/kustomize/blob/master/examples/remoteBuild.md