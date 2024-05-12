import React from 'react'

function Search() {
  return (
<>
<style>{`

.search{
    direction: rtl;
}

`}</style>

<div className="h-[55px] w-[100%] flex justify-center  items-center inputs mt-[2%] search  " >

<div className="h-[55px] w-[70%] bg-[white] flex    items-center  rounded-[10px] max-xl:w-[90%]   ">
<input placeholder="جستجوی شهر، استان " className=" h-[55px]   p-[2%] max-lg:border-2 rounded-[10px] max-xl:w-[200px] " ></input>
 <input placeholder="تاریخ ورود" className=" h-[55px] border-r-2 border-[black] p-[2%] max-lg:hidden max-xl:w-[200px] " ></input>
<input placeholder="تاریخ خروج" className=" h-[55px] border-r-2 border-[black] p-[2%] max-lg:hidden max-xl:w-[200px] " ></input>
<input placeholder="تعداد نفرات" className=" h-[55px] border-r-2 border-[black] p-[2%] max-lg:hidden max-xl:w-[200px] " ></input>
<div className="h-[50px] w-[50px] bg-[#f03e58] flex items-center mr-[2%] rounded-[5px] ">
<img src="pic/search.png" className="h-[40px]"   ></img>
</div>
 
</div>


</div>

</>  
     

  )
}

export default Search