import React,{useEffect,useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import start from './icons/arrowRight.svg';
import target from './icons/target.svg';
import bomb from './icons/bomb.svg';
import weight from './icons/weight.svg';
import './App.css';


function App() { 
  const initX = 62;
  const initY = 30;
 const initBoard =(boardSizeX,boardSizeY)=>{
  let board = [];
   for(let i=0;i<boardSizeY;i++)
      {
        let row=[]
        for(let j=0;j<boardSizeX;j++)
          row.push(0);
        board.push(row);
      }
      return board;
 }
 const [board,setBoard] = useState(initBoard(initX,initY));
 const [currentAdd,setCurrentAdd] = useState("start");
 const [shouldClear,setShouldClear] = useState(false);
 const [shouldClearWalls,setShouldClearWalls] = useState(false);
 const [speed,setSpeed] = useState("Average");
 const [algo,setAlgo] = useState("")
 const handleClassname = cell=>{
   if(cell===0)
     return "cell";
   if(cell===1 || cell===8)
     return "cell start";
   if(cell===2 || cell===9)
     return "cell target";
   if(cell===3 || cell===10)
     return "cell bomb";
   if(cell===4 || cell===11)
      return "cell weight";
   if(cell===5)
     return "cell visited";
   if(cell===6)
     return "cell shortest";
   if(cell===7)
     return "cell wall";

 }

 const handleIcons = (cell)=>{
      if(cell===1 || cell===8)
        return <img src={start} alt=""/>
      if(cell===2 || cell===9)
        return <img src={target} alt=""/>
      if(cell===3 || cell===10)
        return <img src={bomb} alt=""/>
      if(cell===4 || cell===11)
        return <img src={weight} alt=""/>
  return null;
 }


const handleClick = (x,y)=>{
  let newBoard = [...board];
  if(newBoard[y][x] === 1 || newBoard[y][x] === 2 || newBoard[y][x] === 3 || newBoard[y][x] === 4 || newBoard[y][x] === 7)
  {
      if(newBoard[y][x] === 1)
        {
          for(let i=0;i<newBoard.length;i++)
          for(let j=0;j<newBoard[0].length;j++)
              if(newBoard[i][j]===1)
                newBoard[i][j] = 0;
                setCurrentAdd("start");
        }
        if(newBoard[y][x] === 2)
          {
            for(let i=0;i<newBoard.length;i++)
            for(let j=0;j<newBoard[0].length;j++)
                if(newBoard[i][j]===2)
                  newBoard[i][j] = 0;
            let flag = false;
            for(let i=0;i<newBoard.length;i++)
            for(let j=0;j<newBoard[0].length;j++)
                if(newBoard[i][j]===2)
                  flag = true
                  flag?setCurrentAdd("none"):setCurrentAdd("target");
          }
          if(newBoard[y][x] === 3 || newBoard[y][x] === 4 || newBoard[y][x] === 7)
            newBoard[y][x] = 0;
  }
  else
    {
      if(currentAdd==="start")
      { 
        for(let i=0;i<newBoard.length;i++)
          for(let j=0;j<newBoard[0].length;j++)
              if(newBoard[i][j]===1)
                newBoard[i][j] = 0;
        newBoard[y][x] = 1;
        let flag = false;
        for(let i=0;i<newBoard.length;i++)
        for(let j=0;j<newBoard[0].length;j++)
            if(newBoard[i][j]===2)
              flag = true
              flag?setCurrentAdd("none"):setCurrentAdd("target");
      }
      if(currentAdd==="target")
      { 
        for(let i=0;i<newBoard.length;i++)
          for(let j=0;j<newBoard[0].length;j++)
              if(newBoard[i][j]===2)
                newBoard[i][j] = 0;
        newBoard[y][x] = 2; 
        setCurrentAdd("wall")    
      }
      if(currentAdd==="bomb")          
        newBoard[y][x] = 3;         
      if(currentAdd==="weight")          
        newBoard[y][x] = 4;         
      if(currentAdd==="wall")         
        newBoard[y][x] = 7; 
    }         
  setBoard(newBoard);

}

const handleHover = (x,y,e)=>{
  let newBoard = [...board];
  if(e.buttons===1 && currentAdd==="wall")                
      newBoard[y][x] = 7;   
  else
  {
    if(newBoard[y][x]===0)
    {

      if(currentAdd==="start")
        newBoard[y][x] = 8;     
      if(currentAdd==="target")
        newBoard[y][x] = 9;     
      if(currentAdd==="bomb")        
        newBoard[y][x] = 10;         
      if(currentAdd==="weight")     
        newBoard[y][x] = 11;   
    }      
 } 
 setBoard(newBoard);
}

const handleLeave = ()=>{
  let newBoard = [...board];
  for(let i=0;i<newBoard.length;i++)
    for(let j=0;j<newBoard[i].length;j++)
      if(newBoard[i][j] === 8 || newBoard[i][j] === 9 || newBoard[i][j] === 10 || newBoard[i][j] === 11)
        newBoard[i][j] = 0;
  setBoard(newBoard);
}

useEffect(()=>{
  if(shouldClear)
    {
      setBoard(initBoard(initX,initY));
      setShouldClear(false);
      setCurrentAdd("start");
      
    }
  if(shouldClearWalls)
  {
    let newBoard = [...board];
    for(let i=0;i<newBoard.length;i++)
            for(let j=0;j<newBoard[0].length;j++)
                if(newBoard[i][j]===7 || newBoard[i][j]=== 4)
                newBoard[i][j] = 0;
    setShouldClearWalls(false);
  }
  // eslint-disable-next-line
},[shouldClear,shouldClearWalls]);
 return (
    <div className="App">
      <Navbar algo={algo} setAlgo={(algo)=>setAlgo(algo)} speed={speed} setSpeed={(speed)=>setSpeed(speed)} setShouldClearWalls={()=>setShouldClearWalls(true)} setShouldClear={()=>setShouldClear(true)}/>
      <Toolbar  algo={algo} setCurrentAdd={(e)=>setCurrentAdd(e)}/> 
      <div className="board">
        {board.map((e,i)=><div key={i} className="row">
          {e.map((cell,index)=><div key={index} onMouseEnter={(e)=>handleHover(index,i,e)} onMouseLeave={()=>handleLeave()} 
          className={handleClassname(cell)} onClick={()=>handleClick(index,i)}>{handleIcons(cell)}</div>)}
        </div>)}
      </div>    
    </div>
  );
}

export default App;
