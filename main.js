var url= "https://cdn.jsdelivr.net/gh/AdorableParker/PACGPRL@lib/" + Math.floor(Math.random() * 2) + '/' + (Math.floor(Math.random() * 1000) + 1) + '.webp'
if (window.location.search.substring(1) == "pacgprl") {
    document.write(url);
} else {
    window.location.href = url
}
