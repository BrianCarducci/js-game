var player = document.getElementById('player');
player.style.top = '30px';


document.addEventListener('keydown', e => {
    if (e.code === "ArrowDown") {
        player.style.top = parseInt(player.style.top.split('px')[0]) + 1 + 'px';
    }
    if (e.code === "ArrowUp") {
        player.style.top = parseInt(player.style.top.split('px')[0]) - 1 + 'px';
    }
    if (e.code === "ArrowLeft") {
        player.style.left = parseInt(player.style.top.split('px')[0]) - 1 + 'px';
    }
    if (e.code === "ArrowRight") {
        player.style.left = parseInt(player.style.top.split('px')[0]) + 1 + 'px';
    }
});