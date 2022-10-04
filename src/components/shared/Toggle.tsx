import React from 'react'
function Toggle() {

  const [darkToggle, setDarkToggle] = React.useState(false)
  
  

  return (

    // <div className=''>
    //           <label className='switch'>
    //             <input type='checkbox' id='darkToggle' className='darkToggle' />
    //             <span className='slider round'></span>
    //           </label>
    //         </div>

    <div>
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className=" slider slideBtnTg round"></span>
      </label>
         </div>
  )
}

export default Toggle; 