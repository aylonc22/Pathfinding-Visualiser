import React from 'react';
import './Navbar.css'
const Navbar =({setAlgo,       
    visualize,
    setShouldClear,
    setShouldClearWalls,
    clearPath,
    setSpeed,
    speed,
    algo
})=>{
return(<div className="navbar"> 
<div className="name">Pathfinding Viualizer</div>
<div className="dropdown">
    <div className="navButton drop">
        <div>Algorithns</div>
        <div className="caret"/>
    </div>
    <div className="dropdown-content">
        <div className="content" onClick={()=>setAlgo("Dijkstra's Algorithm")}>Dijkstra's Algorithm</div> 
        <div className="content" onClick={()=>setAlgo("A* Search")}>A* Search</div>
        <div className="content" onClick={()=>setAlgo("Greedy Best-first Search")}>Greedy Best-first Search</div>
        <div className="content" onClick={()=>setAlgo("Swarm Algorithm")}>Swarm Algorithm</div>
        <div className="content" onClick={()=>setAlgo("Convergent Swarm Algorithm")}>Convergent Swarm Algorithm</div>
        <div className="content" onClick={()=>setAlgo("Bidirectional Swarm Algorithm")}>Bidirectional Swarm Algorithm</div>
        <div className="content" onClick={()=>setAlgo("Breadth-first Search")}>Breadth-first Search</div>
        <div className="content" onClick={()=>setAlgo("Depth-first Search")}>Depth-first Search</div>

    </div>
</div>
<div className="dropdown">
    <div className="navButton drop">
        <div>{"Mazes&Patterns"}</div>
        <div className="caret"/>
    </div>
    <div className="dropdown-content">
    <div className="content">Fast</div>
    <div className="content">Average</div>
    <div className="content">Slow</div>
    </div>
</div>
<div className="navButton start">{`Visualize ${algo}!`}</div>
<div className="navButton" onClick={()=>setShouldClear()}>Clear Board</div>
<div className="navButton" onClick={()=>setShouldClearWalls()}>{"Clear Walls&Weights"}</div>
<div className="navButton">Clear Path</div>
<div className="dropdown">
    <div className="navButton drop">
        <div>{`Speed:${speed}`}</div>
        <div className="caret"/>
    </div>
    <div className="dropdown-content">
    <div className="content" onClick={()=>setSpeed("Fast")}>Fast</div>
    <div className="content" onClick={()=>setSpeed("Average")}>Average</div>
    <div className="content" onClick={()=>setSpeed("Slow")}>Slow</div>
    </div>
</div>
</div>)
}
export default Navbar

