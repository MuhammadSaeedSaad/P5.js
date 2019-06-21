function Graph() {
  this.nodes = [];
  this.graph = {};
  this.start = null;
  this.end = null;
}


Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.graph[node.name] = node;
}

Graph.prototype.hasNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    var result = null;
    if (this.nodes[i].name == node.name) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}

Graph.prototype.setStart = function(name) {
  this.start = this.graph[name];
  return this.start;
}

Graph.prototype.setEnd = function(name) {
  this.end = this.graph[name];
  return this.end;
}
