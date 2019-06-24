function Node(name) {
  this.name = name;
  this.edges = [];
  this.parent = null;
  this.searched = null;
}


Node.prototype.addEdge = function(node) {
  this.edges.push(node);
  node.edges.push(this);
}
