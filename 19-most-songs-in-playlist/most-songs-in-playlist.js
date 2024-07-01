// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  const sorted = arr.sort();
  let length = 0;
  let playlist = 0;
  for (i=0; i<sorted.length; i++) {
    if (length + sorted[i] < 60) {
      length += sorted[i];
      playlist++;
    }
  }
  return playlist;
};
