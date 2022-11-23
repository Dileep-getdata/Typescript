const no1=document.getElementById('num1') as HTMLInputElement;
const no2=document.getElementById('num2') as HTMLInputElement;
const button=document.querySelector('button')!;


function add(num1:number |string,num2:number|string){
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2;
    }else if(typeof num1==='string' && typeof num2==='string'){
        return num1+' '+num2;
    }
    return +num1 + +num2;
}

button.addEventListener('click',()=>{
    const num1=no1.value;
    const num2=no2.value;
    const result=add(+num1,+num2);
    const strngrsult=add(num1,num2);
    console.log(result);
    console.log(strngrsult);
})