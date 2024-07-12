// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let simplified = [];
  let currentMeeting = arr[0];
  for (let i=1; i<arr.length; i++) {
    const [currentStart, currentEnd] = currentMeeting;
    const [nextStart, nextEnd] = arr[i];
    if ((nextStart <= currentEnd) && (nextEnd > currentEnd)) {
      currentMeeting = [currentStart, nextEnd];
    } else if (nextEnd > currentEnd) {
      simplified.push(currentMeeting);
      currentMeeting = arr[i];
    }
  }
  simplified.push(currentMeeting);
  return simplified;
};
