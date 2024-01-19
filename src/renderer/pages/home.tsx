import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { UpdateForm } from 'renderer/components/update-form';


export function Home() {


  return (

    <div id="home" className="p-4 ">
      <UpdateForm></UpdateForm>

    </div>
  );
}
