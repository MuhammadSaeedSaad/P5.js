
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
    movieNode = new Node(movies[i].title);
    graph.addNode(movieNode);
    cast = movies[i].cast;
    // adding actor nodes to the graph
    for (var j = 0; j < cast.length; j++) {
      actorNode = new Node(cast[j]);
      if (!graph.hasNode(actorNode)) {
        graph.addNode(actorNode);
        movieNode.addEdge(actorNode);
      } else {
        movieNode.addEdge(graph.graph[actorNode.name]);
      }
    }
  }
  start = graph.setStart("Javier Bardem");
  end = graph.setEnd("Kevin Bacon");
  BFS(start, end);
}
