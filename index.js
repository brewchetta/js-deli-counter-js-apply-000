var takeANumber = function(line,name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
};

var nowServing = function(line) {
  if (line.length == 0) { return 'There is nobody waiting to be served!'}
  else { return line[0]; }

};
