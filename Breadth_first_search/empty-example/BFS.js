//implementation of the breadth-first search algorithm

function BFS(start, end) {
  var current;
  var queue = [];
  start.searched = true;
  queue.push(start);
  while (queue.length > 0) {
    current = queue.shift();
    if (current.name == end.name) {
      // console.log("Found " + current.name + "!!");
      break;
    }
    for (var i = 0; i < current.edges.length; i++) {
      var edge = current.edges[i];
      if (!edge.searched){
        edge.searched = true;
        edge.parent = current;
        queue.push(edge);
      }
    }
  }

  var path = [];
  path.push(current);
  child = current.parent;
  while (child) {
    path.push(child);
    child = child.parent;
  }
  console.log(path);
}
