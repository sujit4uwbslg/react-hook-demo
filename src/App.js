import { useState } from "react";

function ToggleVal(){
  const [checked,setCheck]=useState(true)
  const [count,setCount]=useState(0)

  function adjust(){
    if(checked){
      var el=document.createElement("p")
      el.innerHTML="This is sample toggle text"
      el.id="new_elem"
      document.body.appendChild(el)
    }else{
      var elm=document.getElementById("new_elem")
      if(elm==null){
        console.log("The lement does not exists")
      }else{
        elm.remove()
      }
    }
  }

  return(
    <>
     <button onClick={()=>{setCheck(!checked);adjust()}}>Toggle</button>
     <div>
      <button onClick={()=>setCount(count+1)}>Count{count}</button>
     </div>
    </>
   
  )

}

function App() {
  return (
    <div className="App">
     <ToggleVal/>
    </div>
  );
}

export default App;
