//Creating an array two methods array literal [] and array constructor
//array literal []
let arr=[1,2,3,4,5]
console.log(arr)
//array constructor new
let arr2=new Array(1,2,3,4,5);
console.log(arr2)
//array can store anything
let arr3=[1,true,'dash',function(){}]
console.log(arr3)
//Array typeof -> object
console.log(typeof(arr3))
//BUILT IN ARRAY METHODS
//push  and pop
let arrs=[1,2,3,4,5]
arrs.push(6) //add element to the end of the array
console.log(arrs)
arrs.pop()//remove element from the end of the array
console.log(arrs)

//shift and unshift
let arrs2=[1,2,3,4,5]
let firstelem=arrs2.shift() //remove first element
console.log(firstelem)
arrs2.unshift(true)//inset new element in the begining
console.log(arrs2)

//slice and splice
let brr=[1,2,3,4,5]
let brrS=brr.slice(1,3) //brrS shallow copy
console.log(brrS)

brr.splice(1,3,'hello')
console.log(brr)


//MAP,FILTER ,REDUCE
//MAP
let mapArr=[1,2,3,4,5,6,7,8,9,10] //applies a fn to each element of the array
let ans=mapArr.map((i)=>{return i*2})
console.log(ans)
//filter
let filterArr=[1,2,3,4,5,6,7,8,9,10]  //fiter element from an array  using a fn
let filterAns=filterArr.filter((i)=>{return i%2==0})
console.log(filterAns)
//reduce
let reduceArr=[1,2,3,4,5,6,7,8,9,10]  //perform a fn(math) on eac element of the array to get a single value two arguments (accumalator,currentvalue)
let reduceAns=reduceArr.reduce((acc,curr)=>
    {
        return acc+curr
    },0) //initailize acc or it auto initailizes acc=arr[0]
    console.log(reduceAns)

    //indexOf find sort

    let Arr=[1,2,3,4,true,5,6,7,8,9,10,true]
    let index=Arr.indexOf(true) //returns the first occurrence of the element
    let index2=Arr.lastIndexOf(true)//returns the last occurrence of the element
    let findAns=Arr.find((i)=>i==9) //Returns the value of the first element in the array where predicate is true, and undefined otherwise.
    console.log(findAns)
    console.log(index)
    console.log(index2)

