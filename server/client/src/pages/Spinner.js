import React from 'react'

const Spinner = () => {
  return (
    <div>
        <div class="flex justify-center items-center {{ containerClasses }}">
          <div class="loader ease-linear rounded-full border-8 border-t-8 {{ spinnerClasses }}"></div>
        </div>
    </div>
  )
}

export default Spinner