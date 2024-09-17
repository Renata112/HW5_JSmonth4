import React, {useState} from 'react';

function MainPage(props) {
    const [name, setName]=useState("");
    const [nameList, setNameList]=useState([])

    function addName(){
        if (name !==''){
            const newNameList =nameList.slice();
            newNameList.push(name);
            setNameList(newNameList);
            setName('');
        }

    }
    return (
        <div>
            <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
            <button type="button" onClick={addName} disabled={name===''}>
                Add a name to the list
            </button>

            <ul>
                {nameList.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}

export default MainPage;