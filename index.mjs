#!/usr/bin/env zx

await $`git status`
// chalk.blue('Hello world!')
await $`git add ./`
chalk.blue('add success')
let msg = await question('Please input commit -msg:')
chalk.red(msg)
await $`git commit -m 'feat: ${msg}'`
await $`git push`

