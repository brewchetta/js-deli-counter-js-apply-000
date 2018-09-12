var takeANumber = function(line,name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length + 1) + " in line."
};

var nowServing = function(line) {
  if (line.length == 0)
  return line[0];
  
};
