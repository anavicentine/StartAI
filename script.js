function toggleFavorite(button) {
    if (button.classList.contains('favorited')) {
        button.classList.remove('favorited');
        button.innerHTML = '❤️';
    } else {
        button.classList.add('favorited');
        button.innerHTML = '💔';
    }
}