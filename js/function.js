function checkLengthString(str, length){
  if (str.length <= length){
    return true;
  }
  return false;
}

function isPalindrome(str){
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

function meetingIsCorrect(begin, end, startMeeting, durationMeeting){
  const beginArray = inputTimeToArray(begin);
  const endArray = inputTimeToArray(end);
  const startMeetingArray = inputTimeToArray(startMeeting);
  const durationMeetingInHours = Math.floor(durationMeeting/60);
  const durationMeetingInMinutes = durationMeeting%60;
  const endOfMeetingArrray = [startMeetingArray[0] + durationMeetingInHours, startMeetingArray[1] + durationMeetingInMinutes];

  if (startMeetingArray[0] < beginArray[0]) {return false;}
  if (startMeetingArray[0] == beginArray[0] && startMeetingArray[1] < beginArray[1]) {return false;}
  if (endOfMeetingArrray[0] == endArray[0] && endOfMeetingArrray[1] > endArray[1]) {return false;}
  if (endOfMeetingArrray[0] > endArray[0]) {return false;}
  return true;
}

function inputTimeToArray(inputTime){
  return inputTime.split(':').map(Number);
}
