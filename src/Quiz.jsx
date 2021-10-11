import React, { useState } from 'react'
import "./rightContainer.css"

function Quiz() {
    var myAns = ["90", "Right triangle", "Equilateral Triangle"]
    var userAns = []
    
    var [score, setscore] = useState(0)
    const[msg,setmsg]=useState("")
    
    
    function check() {
        if(userAns.length < 2 ){
            setmsg("Answers all the question")
        }else{
          setmsg("")
            userAns.forEach(element => {
               if(myAns.includes(element)){
                   setscore(score=score+1)
               }
            });
        }
    }
    
    return (
        <div className="right-container" >
            <h1 className="header">Quiz</h1>
            <div className="question-container">

                <div className="question">
                    <span>What will be the third angle if Angle1 = 45, Angle2 = 45</span>
                    <label><input type="radio" name="ques1" id="A1" value="60" onChange={(e) => userAns.push(e.target.value)} /> 60</label>
                    <label><input type="radio" name="ques1" id="" value="75" onChange={(e) => userAns.push(e.target.value)} />75</label>
                    <label><input type="radio" name="ques1" id="" value="90" onChange={(e) => userAns.push(e.target.value)} />90</label>
                </div>
                <div className="question">
                    <span>What will be the triangle called if one of its angle is 90 degrees?</span>
                    <label>  <input type="radio" name="ques2" id="A1" value=" Acute triangle" onChange={(e) => userAns.push(e.target.value)} /> Acute triangle</label>
                    <label> <input type="radio" name="ques2" id="" value="obtuse triangle" onChange={(e) => userAns.push(e.target.value)} />obtuse triangle</label>
                    <label><input type="radio" name="ques2" id="" value="Right triangle" onChange={(e) => userAns.push(e.target.value)} />Right angle triangle</label>
                </div>
                <div className="question">
                    <span>If two sides of a triangle is equal to third side, what will be the trangle called</span>
                    <label>  <input type="radio" name="ques3" id="A1" value="Isosceles Triangle" onChange={(e) => userAns.push(e.target.value)} /> Isosceles Triangle</label>
                    <label> <input type="radio" name="ques3" id="" value="Equilateral Triangle" onChange={(e) => userAns.push(e.target.value)} />Equilateral Triangle</label>
                    <label><input type="radio" name="ques3" id="" value="Scalene Triangle" onChange={(e) => userAns.push(e.target.value)} />Scalene Triangle</label>
                </div>
            </div>
            <button onClick={check}>Submit</button>
            <span className="response">{msg}</span>
            <span className="response">your score is : {score} </span>

        </div>
    )
}

export default Quiz
