import React,{useState} from 'react'

function Area() {
    const [sides, setside] = useState({
        side_one:"",
        side_two:""      
    })
    const[msg,setmsg]=useState("")
    function check(){
         if(sides.side_one  === "" || sides.side_two  === ""){
             setmsg("values can't be empty'")
        }else{
             if(sides.side_one  <= 0 || sides.side_two  <= 0 ){
               setmsg("Values can't be negative or less than 1")
             }else{
                 var area= (sides.side_one * sides.side_two)/2
                 setmsg("your area is : " + area.toFixed(2) +"cm square")
             }
         }

    }
    return (
        <div className="right-container">

            <h1 className="header">Calculate Area of Triangle!!</h1>
            
            <input className="T-input" type="number" onChange={(e)=>setside({...sides, side_one:e.target.value})}   placeholder="Enter length first side"     />
            <input className="T-input" type="Number" onChange={(e)=>setside({...sides, side_two:e.target.value})}   placeholder="Enter length second side"   />
            <button onClick={(e)=>check(e)}   >Submit</button>
            <span className="response">{msg}</span>
            

        </div>
    )
}

export default Area
