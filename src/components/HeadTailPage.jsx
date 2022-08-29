import React, { useEffect, useState } from 'react'

let i,j;
i = j = 0;
let lastValue;
const HeadTailPage = () => {
  const [table,setTable] = useState([[]]);  
  const [dropDownValue,selectDropDownValue] = useState("select");
  const [resultString,setResultString] = useState([""]);
  const [error,setError] = useState("");

  const selectDropValue = (e) => {
    selectDropDownValue(e.target.value)
  }
  
  const submitDropValue = () => {
    if(dropDownValue === "select") {
        setError("Please select value from dropdown")
        return;
    }    
    setError(" ")
    const table1 = [...table]
    if(!table1[0][0]) {
        table1[0] = [];
        table1[0][0] = dropDownValue
        setTable(table1)
    } else {
        if(dropDownValue !== lastValue) {
            i = i+1;
            table1[i] = [];
            table1[i].push(dropDownValue);
        } else {
            table1[i].push(dropDownValue);
        }
        setTable(table1);
    }
    lastValue = dropDownValue;
    selectDropDownValue("select")
  }

  useEffect(()=>{
    console.log("result ",resultString)
  },[resultString])
  useEffect(()=>{

    let maxLen = -2;
    for(let i=0;i<table.length;i++) {
        if(table[i].length > maxLen)
            maxLen = table[i].length;
    }

    let currStr = [""]
    for(let i=0;i<maxLen;i++) {
        currStr[i] = ""
        for(j=0;j<table.length;j++) {
            if(table[j][i])
                currStr[i] = currStr[i] + table[j][i]
            else 
                currStr[i]= currStr[i] + "&nbsp;";    
        }
    }

    setResultString(currStr)
  },[table])

  return <div>
    <select value={dropDownValue} onChange={selectDropValue}>
        <option value="select" disabled={true} >select</option>
        <option value="H">Heads</option>
        <option value="T">Tails</option>
    </select>
    <br />
    <button onClick={submitDropValue}>submit</button>
    {error && <p>{error}</p>}
    {resultString.map((str,i)=><p key={i}  dangerouslySetInnerHTML={{__html: str}}></p>)}
</div>
}

export default HeadTailPage