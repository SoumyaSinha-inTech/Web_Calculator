var result=document.querySelector("#result"); //placeholder 

function insert(value){         //inserts value 
    result.value+=value;        //result.value is the value at placeholder. += is keep previous value and include next as well
}

function resultClear(){
    result.value=' ';           //gives value blank for AC
}

function removeResult(){
    result.value=result.value.slice(0,-1);      //always remember last number index value -1. and 0 strts with left.
}

function calculate(){
    try{                         //evaluates everything inside the bracket ONLY FOR NOW!
         result.value=eval(result.value);
    } catch {
        result.value="Error";
    }
}
    