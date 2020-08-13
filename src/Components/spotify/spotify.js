export const authEndPoint = "https://accounts.spotify.com/authorize" //this is where we are going to perform our authentication
const redirectUri = "http://localhost:3000/" //if user is authenticated we are going to redirect them on it

const clientID = "607598c9400641f1872b764fea241ae5" //client id that we get after we sign up into the spotify developers account


{/** these are just some features that we are going to achieve it from spotify */}
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

{/** here we are basically achieving access_token that is returned by spotify after successfull login  */}

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
}


{/** this is the url we are throwing to the spotify platform */}
export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;