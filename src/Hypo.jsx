import React,{useState} from 'react'

function Hypo() {
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
       var sum= Math.pow(sides.side_one,2)+ Math.pow( sides.side_two,2)
        var length=Math.sqrt(sum)
        console.log(length)
        setmsg("your hypotenuse is : " + length.toFixed(2))
            }
        }
    }
    return (
        <div className="right-container">
            <h1 className="header">Calculate hypotenuse!!</h1>
            <input className="T-input" type="number" onChange={(e)=>setside({...sides, side_one:e.target.value})}   placeholder="Enter length first side"  required />
            <input className="T-input" type="number" onChange={(e)=>setside({...sides, side_two:e.target.value})}   placeholder="Enter length second side"  required />
            <button onClick={check}  >Submit</button>
            <span className="response">{msg}</span>
            

        </div>
    )
}

export default Hypo
