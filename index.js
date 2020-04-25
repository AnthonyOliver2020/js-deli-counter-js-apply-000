
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var num = katzDeliLine.length;
  
  return 'Welcome, ' + newPerson + '.' + ' You are number ' + num + ' in line.';
}


function nowServing(names) {
  if (names.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = names[0];
    names.splice(0,1);
    return 'Currently serving ' + name + '.';
  }
} 


function currentLine(names) {
  var line = '';
  
  if (names.length === 0) {
    return 'The line is currently empty.';
 } else {
   for (var i = 0; i < line.length; i++) {
     line += (i + 1) + '.' + katzDeliLine[i] + ',';
   }
   line = line.splice(0, line.length-2);
   return 'The line is currently: ' + line;
 }
 