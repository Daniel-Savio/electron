import React, { ReactElement, useState, useRef, ChangeEventHandler } from 'react';
const ipRegex1 = '(\d+\.\d+.\d+.\d+):\d{5}$'
const ipRegex2 = '(\d+\.\d+.\d+.\d+)$'

​
export function UpdateForm() {


  const [sdp, setSdp] = useState<string[]>(['192.168.3.121']);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const inputIpRef = useRef("null");
  const ipErrorRef = useRef("null");
  
  function handleIp(e: any){
    console.log(e.target.value)
  }

  function checkIp(array: string[], ip: string){
    let state =0
     array.forEach((value) =>{
        if(value === ip){ 
          state++
        }
     })
    
     if(state === 0){
      return true
     }else{
      return false
     }
  }
  
  function addArray(): any {

    if(inputIpRef.current!.value ){

      if(checkIp(sdp, inputIpRef.current!.value) === false){
        setErrorMessage("Natan responde: Preencha com algum valor diferente de IP")
      }else{
        
      setErrorMessage("")
      setSdp((old) => {
        return [...old, inputIpRef.current!.value];
      });
      }

      

    }else{
      setErrorMessage("Preencha com algum valor de IP")
      ipErrorRef.current! = errorMessage;
    }


  }

  function removeAll(){
    setSdp([])
  }

  function sendToUpdate() {
    console.log(sdp)
    if(!sdp.length){
      setErrorMessage("Natan avisa: Por favor, insira ao menos um IP")
    }
    window.electron.send('system-update',sdp)
  }

  return (
    <div
      id="update-form"
      className="justify-center  text-center m-b-10 dark:text-slate-50 h-fit w-fit"
    >
      <h1 className="text-xl font-bold mb-1"> Natan</h1>
      <h1 className="text-lg font-bold mb-5"> Atualização de sistema do SD+</h1>

      <div className="mb-10 input-group justify-center align-bottom flex">
        <label
          htmlFor="ip-sdp"
          className="rounded-l-lg p-1 font-bold text-slate-50 bg-slate-500"
        >
          {' '}
          IP
          {' '}
        </label>
        <input
          ref={inputIpRef}
          onChange={handleIp}
          type="text"
          id="ip-sdp"
          placeholder='ex.: 192.168.3.121'
          className="text-slate-800 h-fit text-center p-1  bg-slate-200"
        />
        <button
          id="add-sdp-update"
          onClick={addArray}
          className=" p-1 rounded-r-lg font-bold text-slate-50  bg-treetech-700 b-round w-8"
        >
          +
        </button>
      </div>

      <span className='text-red-500 block mb-1'>{errorMessage}</span>

      <button onClick={removeAll} className='text-slate-50 p-1 m-2 bg-red-700 rounded-md' > Limpar lista </button>

      <button onClick={sendToUpdate} className='text-slate-50 p-1 mb-2 bg-treetech-700 rounded-md' > Atualizar </button>

      {sdp.map((ip: string, index: number) => {
        return (
          <div
            key={index}
            className="mt-2 border-b-2 border-treetech-700 input-group justify-around align-bottom flex"
          >
            <label className="rounded-l-lg p-2 "> IP </label>
            <span className="dark:text-slate-50 h-fit text-center p-2 ">
              {ip}
            </span>
          </div>
        );
      })}
    </div>
  );
}