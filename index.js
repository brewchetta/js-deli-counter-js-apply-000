var takeANumber = function(line,name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
};

var nowServing = function(line) {
  if (line.length == 0) { return 'There is nobody waiting to be served!'}
  else {
    return 'Currently serving ' + line[0] + ".";
    line.shift;
  }
};

var currentLine = function(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently: " +
    for(var i = 0; i < line.length; i++) {
      return (i+1)+". " + line[i] + " "
    }
  }
};
