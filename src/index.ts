


import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Construct } from 'constructs';
import { childProcess } from './child-process';
import { Include } from 'cdk8s';


const MaxKustomizeBuffer = 10 * 1024 * 1024;

/**
 * Options for `Kustomize`.
 */
export interface KustomizeProps {

  /**
   * URL or path to the Kustomize directory. GoGetter URLs are supported: for example to get
   * github's CrunchyData postgres operator, subdirectory kustomize/install/default, from the
   * master ref - use:
   *
   * https://github.com/CrunchyData/postgres-operator-examples//kustomize/install/default?ref=2085b73c85f3c30f0a0b1d3f5fe17b22c3eede3
   *
   * See https://github.com/kubernetes-sigs/kustomize/blob/master/examples/remoteBuild.md for
   * more information
   */
  readonly url: string
  /**
   * The local kustomize executable to use in order to create the manifest.
   * @default ["kubectl", "kustomize"]
   */
  readonly kustomizeExecutable?: string | string[];

  /**
   * Additional flags to add to the `kustomize` execution.
   *
   * @default []
   */
  readonly kustomizeFlags?: string[];
}

/**
 * Represents a Kustomize deployment.
 *
 * Use this construct to import an existing Kustomize directory
 * and incorporate it into your constructs.
 */
export class Kustomize extends Include {

  constructor(scope: Construct, id: string, props: KustomizeProps) {
    const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdk8s-kustomize-'));

    const args = new Array<string>();

    // custom flags
    if (props.kustomizeFlags) {
      args.push(...props.kustomizeFlags);
    }

    // kustomize dir
    args.push(props.url);

    let prog = (props.kustomizeExecutable ?? ['kubectl', 'kustomize']);
    if (typeof prog !== 'string') {
      let [newProg, ...rest] = prog;
      args.unshift(...rest);
      prog = newProg;
    }

    const outputFile = renderTemplate(workdir, prog, args);
    super(scope, id, { url: outputFile });

  }
}

function renderTemplate(workdir: string, prog: string, args: string[]) {
  const kustomize = childProcess.spawnSync(prog, args, {
    maxBuffer: MaxKustomizeBuffer,
  });

  if (kustomize.error) {
    const err = kustomize.error.message;
    if (err.includes('ENOENT')) {
      throw new Error(`unable to execute '${prog}' to generate kustomization. Is it installed on your system?`);
    }

    throw new Error(`error while rendering a kustomize template: ${err}`);
  }

  if (kustomize.status !== 0) {
    throw new Error(kustomize.stderr.toString());
  }

  const outputFile = path.join(workdir, 'kustomize-out.yaml');
  const stdout = kustomize.stdout;
  fs.writeFileSync(outputFile, stdout);
  return outputFile;
}