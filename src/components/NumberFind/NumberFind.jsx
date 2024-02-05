import React, { useEffect, useState } from 'react'

const NumberFind = () => {
    const [myNum, setMyNum] = useState(9)
    
    let NumberArry = []
    
    for (let i = 1; i <= 100; i++) {    
        NumberArry.push(i)
     }
// console.log(NumberArry);
    //  const myNumberSet = NumberArry
    //  .filter(item => (item - myNum)%10 == 0 || item >=(myNum * 10) && item < (myNum + 1) * 10)
//|| item >=(myNum * 10) || item < (myNum + 1) * 10 
    //  console.log(myNumberSet);

// Update code from ChatGPT
let myNumberSet = []  
if (myNum > 0) {
    myNumberSet = NumberArry.filter(num => num.toString().includes(myNum)); 
}
console.log(myNumberSet);

     let TotalItem = myNumberSet.length;

    const doubleNumber = myNum + myNum;

console.log(doubleNumber);

    if(myNumberSet.toString().includes(doubleNumber) && doubleNumber > 0){
        TotalItem += 1;
        console.log("true -",TotalItem);
    }else{
        console.log("false -",TotalItem);
    }


  return (
    <div className=' bg-[#0f172b] py-14 text-white' >
        <div className=" mx-auto max-w-6xl px-4">
            <div className="w-full">
                <h1 className='text-2xl font-bold text-gray-900 dark:text-white font-md md:text-3xl mb-6 mt-6'>How many Input Number exist 1 to 100</h1>
                <input
                 className='p-2 rounded-sm border-2 mr-2 mb-2 text-black'   
                 type="text" name="myNum" id="" value={myNum} onChange={(e)=>setMyNum(String(e.target.value))} />
            </div>
            All Numbers = [{myNumberSet.map((num)=> (
                `${num}, `
            ))}] <br/>
            Total {TotalItem} Numbers Found.
        </div>
    </div>
  )
}

export default NumberFind