require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

const githubData={
    "login": "sidd-pixel",
    "id": 179576411,
    "node_id": "U_kgDOCrQeWw",
    "avatar_url": "https://avatars.githubusercontent.com/u/179576411?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sidd-pixel",
    "html_url": "https://github.com/sidd-pixel",
    "followers_url": "https://api.github.com/users/sidd-pixel/followers",
    "following_url": "https://api.github.com/users/sidd-pixel/following{/other_user}",
    "gists_url": "https://api.github.com/users/sidd-pixel/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sidd-pixel/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sidd-pixel/subscriptions",
    "organizations_url": "https://api.github.com/users/sidd-pixel/orgs",
    "repos_url": "https://api.github.com/users/sidd-pixel/repos",
    "events_url": "https://api.github.com/users/sidd-pixel/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sidd-pixel/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Siddhant Thakur",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 6,
    "following": 7,
    "created_at": "2024-08-27T08:42:20Z",
    "updated_at": "2026-03-31T08:40:21Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkedin',(req,res)=>{
    res.send('This is my LinkedIn profile: https://www.linkedin.com/in/siddhantthakur/')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login into my website</h1> ')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
