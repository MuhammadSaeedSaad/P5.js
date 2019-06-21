
var graph;
var start;
var end;


function preload() {
  data = loadJSON("Kevin_Bacon.json");
  graph = new Graph();
}

function setup() {
  movies = data.movies;
  // adding movie nodes to the graph
  for (var i = 0; i < movies.length; i++) {
    movie = new Node(movies[i].title);
    graph.addNode(movie);
    cast = movies[i].cast;
    // adding actor nodes to the graph
    for (var j = 0; j < cast.length; j++) {
      actor = new Node(cast[j]);
      if (!graph.hasNode(actor)) {
        // actor.addEdge(movie);
        graph.addNode(actor);
      }
      movie.addEdge(actor);
    }
  }
  start = graph.setStart("Mike O 'Malley");
  end = graph.setEnd("Kevin Bacon");
  BFS(start, end);
}

function BFS(start, end) {
  var queue = [];
  start.searched = true;
  queue.push(start);
  while (queue.length > 0) {
    var current = queue.shift();
    if (current.name == end.name) {
      console.log("Found " + current.name + "!!");
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
}
