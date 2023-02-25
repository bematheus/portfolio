
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/bematheus/portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
