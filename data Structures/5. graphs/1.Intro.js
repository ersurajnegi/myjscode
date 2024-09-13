/*
    Graphs : NON-LINEAR data structure
        - A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points,
            together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

            Nodes + Connections = Graphs

    EXAMPLES:
        - Social Networks
        - Advertisements
        - Routing Algorithms

    ESSENTIAL GRAPH TERMS
        - Vertex - a node
        - Edge - connection between nodes
        - Weighted/Unweighted - values assigned to distances between vertices
        - Directed/Undirected - directions assigned to distanced between vertices

    Storing GRAPHS:
        - Adjacency Matirx => saved using a 2D Array(Matrix) Nodes/Vertex in Row and column.

            -	A	B	C	D	E	F    => 1 Means connection between row and column edge
            A	0	1	0	0	0	1
            B	1	0	1	0	0	0
            C	0	1	0	1	0	0
            D	0	0	1	0	1	0
            E	0	0	0	1	0	1
            F	1	0	0	0	1	0


        - Adjacency List => use hash table / MAp to save it with Nodes/Vertex as the key to store array of Nodes/Vertex to which current Node has connection
            eg

                {
                    A: ["B", "F"], ==> this means A has connection to B and F vertex
                    B: ["A", "C"],
                    C: ["B", "D"],
                    D: ["C", "E"],
                    E: ["D", "F"],
                    F: ["E", "A"]
                }

    DIFFERENCES & BIG O : 
            |V| - number of vertices
            |E| - number of edges

            
            OPERATION	    ADJACENCY LIST	    ADJACENCY MATRIX
            Add Vertex	        O(1)	​            O(|V^2|)
            Add Edge	        O(1)	            O(1)
            Remove Vertex	    O(|V| + |E|)	​    O(|V^2|)
            Remove Edge	        O(|E|)	            O(1)
            Query	            O(|V| + |E|)	    O(1)
            Storage	            O(|V| + |E|)	​   O(|V^2|)

            
    TRAVERSAL :
        - BREADTH FIRST SEARCH -->
        - DEPTH FIRST SEARCH ->



*/