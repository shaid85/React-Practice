import React, { useEffect, useState } from 'react'


// get the localStorage data
const getLocalData = () => {
    const lists = localStorage.getItem("mystocklish")
  
    if (lists) {
      return JSON.parse(lists)
    } else {
      return []
    }
  }

const PriceList = () => {
    const [inputLot, setLot] = useState("")
    const [inputPrice, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const [itemsLot, setLotitems] = useState(getLocalData())

    const [categorylist, setCategorylist] = useState([]);
  

    const addItem = () => {
        if (!inputLot & !inputPrice){
            alert("Please fill");
        }else{

            const newinputdata = {
                id: new Date().getTime().toString(),
                lot: Number(inputLot),
                price: Number(inputPrice),
                category: category,
                total: (inputLot*inputPrice),
            }
            setLotitems([...itemsLot, newinputdata]);

            setLot("")
            setPrice("")
            setCategory("")
        }
    }

    const deleteItem = (index) => {
      if (window.confirm("Are you Sure?")) {
        const updateItems = itemsLot.filter((curElem) => {
          return curElem.id !== index
        })  
        setLotitems(updateItems)
        const updateList = categorylist.filter((curElem) => {
          return curElem.id !== index
        })  
        setCategorylist(updateList)
      } else {
    return false
      }    
    }

    const clearAll = () => {
        if (window.confirm("Are you Sure?")){
            setLotitems([])
        }
    }
 
    const filterItem = (category) => {       
          const updatedList = itemsLot.filter((curElem) => {
            return curElem.category === category
          })
          setCategorylist(updatedList)
      }
           
    var result = categorylist.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + arr.total;
      
        // set initial value as 0
      },0);   
           
    var result2 = categorylist.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + arr.lot;
      
        // set initial value as 0
      },0);  
           
   
    let finalresult = result/result2;

    const uniqueList = [
        ...new Set(itemsLot.map((curElem) => {
          return curElem.category
      })),
      ]

   // adding local stroage
    useEffect(() => {
        localStorage.setItem("mystocklish", JSON.stringify(itemsLot))
    }, [itemsLot]) 

  return (
    <div className="w-full dark:bg-gray-800">

    <div className="mx-auto max-w-6xl py-6 sm:py-12 px-3 sm:px-0">

      <div>
            <h1 className='text-xl text-gray-900 dark:text-white font-bold md:text-3xl mb-6'>Stock price - Average</h1>     
             <br/>
             <h3 className='text-xl text-gray-900 dark:text-white font-md md:text-2xl mb-6'>
                 Add your positions
             </h3>
             <input type="text" placeholder="Symbol" 
             className=' p-2 rounded-sm border-2 mr-2 mb-2'
             value={category} onChange={(event) => setCategory(event.target.value)} list="browsers" name="browser"/>
  <datalist id="browsers">
    <option value="eurusd"></option>
    <option value="gbpusd"></option>
    <option value="xauusd"></option>
    <option value="gbpjpy"></option>
    <option value="gbpcad"></option>
  </datalist>
             <input type="text" placeholder="Lot" 
              className=' p-2 rounded-sm border-2 mr-2 mb-2'
             value={inputLot} onChange={(event) => setLot(event.target.value)} />

             <input type="text" placeholder="Price" 
              className=' p-2 rounded-sm border-2 mr-2 mb-2'
             value={inputPrice} onChange={(event) => setPrice(event.target.value)} />

             <button className='text-white items-center px-6 py-3 font-medium bg-blue-500 rounded-lg hover:opacity-75 mr-2 mb-2' onClick={() => addItem()}>Add List</button>
             <button className='text-white items-center px-6 py-3 font-medium bg-blue-500 rounded-lg hover:opacity-75' onClick={() => clearAll()}> Clear list</button>
             <br/><br/>
             <div className='pricelist'>

             {itemsLot.map(
                (curElem,index) => {
                    return (
                        <>
<h5 className=' dark:text-white' key={curElem.id}>{curElem.category}, Lot-{curElem.lot} - Price: {curElem.price} <i className="far fa-trash-alt" onClick={() => deleteItem(curElem.id)}></i></h5>

                        </>
                        
                    )
                }
             )} 
<br/>  


<br/>
{uniqueList.map(
    (curElem,index) => {
        return (
            <>
            <button className='text-white items-center px-6 py-3 font-medium bg-blue-500 rounded-lg hover:opacity-75 mr-2 focus:bg-green-800' onClick={()=>filterItem(curElem)}>{curElem}</button>


            </>
        )
    }
)}
<br/>  
<br/>  
{categorylist.map(
    (curElem,index) => {
        return (
            <>
            <h5 className=' dark:text-white' key={curElem.id}>{curElem.category}, Lot-{curElem.lot} - Price: {curElem.price} <i className="far fa-trash-alt" onClick={() => deleteItem(curElem.id)}></i></h5>

            </>
        )
    }
)}        
<br/>          
<h5 className=' dark:text-white'>Total Lot:- {result2}, avarage is:- {finalresult.toFixed(2)} </h5>
             </div>

             
         </div>



    </div>

    </div>    
  )
}

export default PriceList 