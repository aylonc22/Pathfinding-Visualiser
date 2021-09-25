import React from "react";
import target from '../../icons/target.svg';
import start from '../../icons/arrowRight.svg';
import bomb from '../../icons/bomb.svg';
import weight from '../../icons/weight.svg';
import './Toolbar.css';
const Toolbar = ({setCurrentAdd,algo})=>{
const handleAlgo = algo=>{
    if(algo==="")
        return"Pick an algorithm and visualize it!";
    if(algo==="Dijkstra's Algorithm")
         return"Dijkstra's Algorithm is weighted and guarantees the shortest path!";
    if(algo==="A* Search")
        return"A* Search is weighted and guarantees the shortest path!";
    if(algo==="Greedy Best-first Search")
          return"Greedy Best-first Search is weighted and does not guarantee the shortest path!";
    if(algo==="Swarm Algorithm")
         return"Swarm Algorithm is weighted and does not guarantee the shortest path!";
    if(algo==="Convergent Swarm Algorithm")
         return"Convergent Swarm Algorithm is weighted and does not guarantee the shortest path!";
    if(algo==="Bidirectional Swarm Algorithm")
         return"Bidirectional Swarm Algorithm is weighted and does not guarantee the shortest path!";
    if(algo==="Breadth-first Search")
         return"Breath-first Search is unweighted and guarantees the shortest path!";
    if(algo==="Depth-first Search")
         return"Depth-first Search is unweighted and does not guarantee the shortest path!";                                 
}
const handleWeightText = ()=>{
    if(algo==="Breadth-first Search" || algo==="Depth-first Search")
        return "noWeight";
    return "kitname";
}
const handleWeightIcon = ()=>{
    if(algo==="Breadth-first Search" || algo==="Depth-first Search")
        return "noWeightIcon";
    return "icon";
}
return(<div className="toolkitWrap">
    <div className="toolKit">
        <div className="kit"><img className="icon" src={start} alt="" onClick={()=>setCurrentAdd("start")}/><div className="kitname" onClick={()=>setCurrentAdd("start")}>Start Node</div></div>
        <div className="kit"><img className="icon" src={target} alt="" onClick={()=>setCurrentAdd("target")}/><div className="kitname" onClick={()=>setCurrentAdd("target")}>Target Node</div></div>
        <div className="kit"><img className="icon" src={bomb} alt="" onClick={()=>setCurrentAdd("bomb")}/><div className="kitname" onClick={()=>setCurrentAdd("bomb")}>Bomb Node</div></div>
        <div className="kit"><img className={handleWeightIcon()} src={weight} alt="" onClick={()=>setCurrentAdd("weight")}/><div className={handleWeightText()} onClick={()=>setCurrentAdd("weight")}>Weight Node</div></div>
        <div className="kit"><div className="icon noImage "/><div className="kitname">Unvisited Node</div></div>
        <div className="kit"><div className="icon noImage end"/><div className="kitname">Visited Node</div></div>
        <div className="kit"><div className="icon noImage shortest"/><div className="kitname">Shortest-path Node</div></div>
        <div className="kit"><div className="icon noImage wall" onClick={()=>setCurrentAdd("wall")}/><div className="kitname" onClick={()=>setCurrentAdd("wall")}>Wall Node</div></div>       
    </div>
    <div className="info">{handleAlgo(algo)}</div>
    </div>)
}
export default Toolbar;