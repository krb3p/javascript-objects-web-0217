var playlist = {madonna: 'Like a Prayer', dawes: 'Someone Will'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  playlist;
}
