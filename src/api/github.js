/**
 * Mocking client-server processing
 */
const _users = [
  {"login":"mojombo","id":1,"avatar_url":"https://avatars0.githubusercontent.com/u/1?v=4","gravatar_id":"","url":"https://api.github.com/users/mojombo","html_url":"https://github.com/mojombo","followers_url":"https://api.github.com/users/mojombo/followers","following_url":"https://api.github.com/users/mojombo/following{/other_user}","gists_url":"https://api.github.com/users/mojombo/gists{/gist_id}","starred_url":"https://api.github.com/users/mojombo/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/mojombo/subscriptions","organizations_url":"https://api.github.com/users/mojombo/orgs","repos_url":"https://api.github.com/users/mojombo/repos","events_url":"https://api.github.com/users/mojombo/events{/privacy}","received_events_url":"https://api.github.com/users/mojombo/received_events","type":"User","site_admin":false},
  {"login":"defunkt","id":2,"avatar_url":"https://avatars0.githubusercontent.com/u/2?v=4","gravatar_id":"","url":"https://api.github.com/users/defunkt","html_url":"https://github.com/defunkt","followers_url":"https://api.github.com/users/defunkt/followers","following_url":"https://api.github.com/users/defunkt/following{/other_user}","gists_url":"https://api.github.com/users/defunkt/gists{/gist_id}","starred_url":"https://api.github.com/users/defunkt/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/defunkt/subscriptions","organizations_url":"https://api.github.com/users/defunkt/orgs","repos_url":"https://api.github.com/users/defunkt/repos","events_url":"https://api.github.com/users/defunkt/events{/privacy}","received_events_url":"https://api.github.com/users/defunkt/received_events","type":"User","site_admin":true},
  {"login":"pjhyett","id":3,"avatar_url":"https://avatars0.githubusercontent.com/u/3?v=4","gravatar_id":"","url":"https://api.github.com/users/pjhyett","html_url":"https://github.com/pjhyett","followers_url":"https://api.github.com/users/pjhyett/followers","following_url":"https://api.github.com/users/pjhyett/following{/other_user}","gists_url":"https://api.github.com/users/pjhyett/gists{/gist_id}","starred_url":"https://api.github.com/users/pjhyett/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pjhyett/subscriptions","organizations_url":"https://api.github.com/users/pjhyett/orgs","repos_url":"https://api.github.com/users/pjhyett/repos","events_url":"https://api.github.com/users/pjhyett/events{/privacy}","received_events_url":"https://api.github.com/users/pjhyett/received_events","type":"User","site_admin":false}
]

const _user = {
  "login":"mojombo",
  "id":1,
  "avatar_url":"https://avatars0.githubusercontent.com/u/1?v=4",
  "gravatar_id":"",
  "url":"https://api.github.com/users/mojombo",
  "html_url":"https://github.com/mojombo",
  "followers_url":"https://api.github.com/users/mojombo/followers",
  "following_url":"https://api.github.com/users/mojombo/following{/other_user}",
  "gists_url":"https://api.github.com/users/mojombo/gists{/gist_id}",
  "starred_url":"https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  "subscriptions_url":"https://api.github.com/users/mojombo/subscriptions",
  "organizations_url":"https://api.github.com/users/mojombo/orgs",
  "repos_url":"https://api.github.com/users/mojombo/repos",
  "events_url":"https://api.github.com/users/mojombo/events{/privacy}",
  "received_events_url":"https://api.github.com/users/mojombo/received_events",
  "type":"User",
  "site_admin":false,
  "name":"Tom Preston-Werner",
  "company":null,
  "blog":"http://tom.preston-werner.com",
  "location":"San Francisco",
  "email":null,
  "hireable":null,
  "bio":null,
  "public_repos":59,
  "public_gists":62,
  "followers":20828,
  "following":11,
  "created_at":"2007-10-20T05:24:19Z",
  "updated_at":"2018-02-26T20:05:14Z"
}

export default {
  getUsers (cb) {
    // setTimeout(() => cb(_users), 100)
    return _users
  },

  getUser (cb) {
    // setTimeout(() => cb(_user), 100)
    return _user
  },
}