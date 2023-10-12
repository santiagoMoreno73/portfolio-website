import React from 'react'

const TabButton = ({ active, selectTab, children }) => {

    // console.log(active, selectTab, children);
    const buttonClass = active ? "text-white border-b border-purple" : "text-[#ADB7BE] border-b border-purple-500";

  return (
    <span onClick={selectTab}>
        <p className={`cursor-pointer mr-3 font-semibold hover:text-white ${buttonClass}`}>
            {children}
        </p>
    </span>
  )
}

export default TabButton