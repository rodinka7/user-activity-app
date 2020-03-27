const getCookie = (cookieName) => {
    const decodedCookie = decodeURIComponent(document.cookie);
    const splitedCookies = decodedCookie.split(';');
    for (let cookie of splitedCookies) {
        if (cookie.includes(cookieName))
            return cookie.split('=')[1];
    }
}

export default getCookie;