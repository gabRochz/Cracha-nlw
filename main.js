const linksSociailMidia = {
  github: 'gabRochz',
  instagram: 'iam___gb',
  facebook: 'profile.php?id=100008207649117',
  twiter: 'evebodyhateme'
}
function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSociailMidia[social]}`
  }
}
changeSocialMidiaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSociailMidia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      bioGitHub.textContent = data.bio
      userImage.src = data.avatar_url
    })
}
getGitHubProfilesInfos()
