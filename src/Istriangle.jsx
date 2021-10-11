import React,{useState} from 'react'
import "./rightContainer.css"

function Istriangle() {
    const [Angles , setAngles] = useState({
        Angle_one:0,
        Angle_two:0,
        Angle_three:0,
        response:""
    })
    function check(){
        if(Angles.Angle_one <= 0 || Angles.Angle_two <= 0 || Angles.Angle_three <=0 ){
            setAngles({...Angles,response:"Values can't be Negative,Empty or 0"})   
        }else{

            const sum= Number(Angles.Angle_one)+ Number(Angles.Angle_two)+Number(Angles.Angle_three)
             if(sum===180){
                 setAngles({...Angles,response:"yeah!!This is a triangle!!"});
             }else{
                 setAngles({...Angles,response:"oops!!! this is not a triangle!!"});
               
             }
        }
    }
    return (
        <div className="right-container">
            <h1 className="header">Is this a traingle?🤔</h1>
            <span className="response">{Angles.response}</span>
            <input className="T-input" type="number"   placeholder="Enter Angle 1" onChange={(e)=> setAngles({...Angles, Angle_one : e.target.value})}  />
            <input className="T-input" type="number"  placeholder="Enter Angle 2"  onChange={(e)=> setAngles({...Angles, Angle_two:e.target.value})}   />
            <input className="T-input" type="number"  placeholder="Enter Angle 3"  onChange={(e)=> setAngles({...Angles, Angle_three:e.target.value})} />
            <button  onClick={check}>Submit</button>
            

        </div>
    )
}

export default Istriangle
