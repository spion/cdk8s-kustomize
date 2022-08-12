# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kustomize <a name="Kustomize" id="cdk8s-kustomize.Kustomize"></a>

Represents a Kustomize deployment.

Use this construct to import an existing Kustomize directory
and incorporate it into your constructs.

#### Initializers <a name="Initializers" id="cdk8s-kustomize.Kustomize.Initializer"></a>

```typescript
import { Kustomize } from 'cdk8s-kustomize'

new Kustomize(scope: Construct, id: string, props: KustomizeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-kustomize.Kustomize.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-kustomize.Kustomize.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-kustomize.Kustomize.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-kustomize.KustomizeProps">KustomizeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-kustomize.Kustomize.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-kustomize.Kustomize.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-kustomize.Kustomize.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-kustomize.KustomizeProps">KustomizeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-kustomize.Kustomize.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-kustomize.Kustomize.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-kustomize.Kustomize.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s-kustomize.Kustomize.isConstruct"></a>

```typescript
import { Kustomize } from 'cdk8s-kustomize'

Kustomize.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-kustomize.Kustomize.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-kustomize.Kustomize.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-kustomize.Kustomize.property.apiObjects">apiObjects</a></code> | <code>cdk8s.ApiObject[]</code> | Returns all the included API objects. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-kustomize.Kustomize.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s-kustomize.Kustomize.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* cdk8s.ApiObject[]

Returns all the included API objects.

---


## Structs <a name="Structs" id="Structs"></a>

### KustomizeProps <a name="KustomizeProps" id="cdk8s-kustomize.KustomizeProps"></a>

Options for `Kustomize`.

#### Initializer <a name="Initializer" id="cdk8s-kustomize.KustomizeProps.Initializer"></a>

```typescript
import { KustomizeProps } from 'cdk8s-kustomize'

const kustomizeProps: KustomizeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-kustomize.KustomizeProps.property.url">url</a></code> | <code>string</code> | URL or path to the Kustomize directory. |
| <code><a href="#cdk8s-kustomize.KustomizeProps.property.kustomizeExecutable">kustomizeExecutable</a></code> | <code>string \| string[]</code> | The local kustomize executable to use in order to create the manifest. |
| <code><a href="#cdk8s-kustomize.KustomizeProps.property.kustomizeFlags">kustomizeFlags</a></code> | <code>string[]</code> | Additional flags to add to the `kustomize` execution. |

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s-kustomize.KustomizeProps.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL or path to the Kustomize directory.

GoGetter URLs are supported: for example to get
github's CrunchyData postgres operator, subdirectory kustomize/install/default, from the
master ref - use:

https://github.com/CrunchyData/postgres-operator-examples//kustomize/install/default?ref=2085b73c85f3c30f0a0b1d3f5fe17b22c3eede3

See https://github.com/kubernetes-sigs/kustomize/blob/master/examples/remoteBuild.md for
more information

---

##### `kustomizeExecutable`<sup>Optional</sup> <a name="kustomizeExecutable" id="cdk8s-kustomize.KustomizeProps.property.kustomizeExecutable"></a>

```typescript
public readonly kustomizeExecutable: string | string[];
```

- *Type:* string | string[]
- *Default:* ["kubectl", "kustomize"]

The local kustomize executable to use in order to create the manifest.

---

##### `kustomizeFlags`<sup>Optional</sup> <a name="kustomizeFlags" id="cdk8s-kustomize.KustomizeProps.property.kustomizeFlags"></a>

```typescript
public readonly kustomizeFlags: string[];
```

- *Type:* string[]
- *Default:* []

Additional flags to add to the `kustomize` execution.

---



