import React,{useState} from 'react'

function Area() {
    const [sides, setside] = useState({
        side_one:"",
        side_two:""      
    })
    const[msg,setmsg]=useState("")
    function check(){
        var area= (sides.side_one * sides.side_two)/2

        setmsg("your area is : " + area.toFixed(2) +"cm square")
    }
    return (
        <div className="right-container">
            <h1 className="header">Calculate Area of Triangle!!</h1>
            <input className="T-input" type="number" onChange={(e)=>setside({...sides, side_one:e.target.value})}   placeholder="Enter length first side"  required />
            <input className="T-input" type="number" onChange={(e)=>setside({...sides, side_two:e.target.value})}   placeholder="Enter length second side"  required />
            <button onClick={check}  >Submit</button>
            <span className="response">{msg}</span>
            

        </div>
    )
}

export default Area
