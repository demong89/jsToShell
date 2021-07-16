#!/usr/bin/env zx
// let bear = await question('What kind of bear is best? ')
// console.log(bear);
// console.log(Object.keys(process.env));
// let token = await question('Choose env variable: ', {
//   choices: ['a','b','c']
// })

// let username = await question('What is your GitHub username? ')
let token = await question('Do you have GitHub token in env? ', {
  choices: Object.keys(process.env)
})

console.log(token,process.env[token]);
let headers = {}
if (process.env[token]) {
  headers = {
    Authorization: `token ${process.env[token]}`
  }
}
// let res = await fetch(`https://api.github.com/users/${username}/repos`, {headers})
// let data = await res.json()
// let urls = data.map(x => x.git_url)

// await $`mkdir -p backups`
// cd('./backups')

// await Promise.all(urls.map(url => $`git clone ${url}`))
