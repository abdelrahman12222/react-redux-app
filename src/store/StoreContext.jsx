import React from 'react'
import { createContext } from 'react';
import { useReducer } from 'react';
import { atom } from 'recoil';


    const textState = atom({
        key: 'textState', 
        default: 0, // default value (aka initial value)
      });
    const listofproduct = atom({
        key: 'listofproduct', 
        default: [], // default value (aka initial value)
      });
    const storepage = atom({
        key: 'storepage', 
        default: false, // default value (aka initial value)
      });
 

 export {textState,listofproduct,storepage}


