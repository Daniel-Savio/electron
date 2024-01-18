import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';



export function Home() {
  const [aside, setAside] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  let scl: any;


  useEffect(() => {
    window.electron.askForFiles()
    
  });

  
  return (


    <div id="home" className="p-4 ">
      

    </div>
  );
}
