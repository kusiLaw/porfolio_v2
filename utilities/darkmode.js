
const Mode = () =>{
   if (typeof window !== 'undefined') {
      let store =  localStorage.getItem("mode")

      if ( store === 'dark'){
       return store
      }
      return 'light'

   }
     
}


const updateMode = (mode) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("mode", mode);

  }
}

export { Mode, updateMode } 