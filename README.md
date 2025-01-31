# Mickey's Hello World Action

![Test Workflow](https://github.com/devopselvis/mickeys-hello-world-action/actions/workflows/test-mickeys-hello-world-action.yml/badge.svg)

## Description

Mickey's Hello World Action is a simple GitHub Action that greets the user with a customizable message. This action is a great example of how to create and publish a custom JavaScript action to the GitHub Marketplace.

## Usage

To use this action in your workflow, add the following step to your YAML file:

```yaml
steps:
  - name: "Run Hello World Action"
    id: hello
    uses: devopselvis/mickeys-hello-world-action@v1
    with:
      name: "Mickey"
