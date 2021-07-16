#!/usr/bin/env zx

await $`git status`
// chalk.blue('Hello world!')
await $`git add ./`
console.log(chalk.blue('add success'))
let msg = await question('Please input commit -msg:')

await $`git commit -m 'feat: ${msg}'`
await $`git push`
