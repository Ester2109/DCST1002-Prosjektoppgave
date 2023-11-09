const hashCode = (string) => {
  if (!string) return 0;

  var hash = 0;

  for (var i = 0; i < string.length; i++) {
    var char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
};

export default hashCode;
