import { useState,useEffect } from 'react';

const useCustomFetch = (url) => {
    const [datas, setDatas] = useState(null);  
    const [isFetchPending, setIsFetchPending] = useState(true);
    const [isError, setIsError] = useState(null);

   
 
useEffect(()=>{ 
  const abortCont =new AbortController();
    setTimeout(
      () => {
       fetch(url,{signal: abortCont.abort.signal})
       .then(responses => {
         console.log(responses);
         if (!responses.ok) {
           throw Error("Error Message : could not fetch data from the resources!")
         }
         return responses.json();
       })
       .then(data => {
         console.log(data);
         setDatas(data);
         setIsFetchPending(false); 
         setIsError(null);
         })
         .catch(
           err =>{
            if(err.name === 'AbortError'){
              console.log('Fetch is Aborted');

            }else{

            
             setIsFetchPending(false);
           setIsError(err.message);
           console.log(err.message);
            }
       })
      },2000
      );
      return ()=>abortCont.abort();

   }, [url]);
   
 return {datas, isFetchPending, isError};


}

export default useCustomFetch