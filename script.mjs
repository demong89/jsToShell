#!/usr/bin/env zx
// console.log(111);


// 获取 repo；列表
const data = await fetch('https://api.github.com/users/demong89/repos')
const urls  = await data.json()



const repos = urls.filter(info=>!info.fork).map(rep=>rep.git_url)
console.log(repos);

await $`rm -rf backups`
await $`mkdir backups`

cd('./backups')

// 克隆

Promise.all(
  repos.map(url=>$`git clone ${url}`)
)
