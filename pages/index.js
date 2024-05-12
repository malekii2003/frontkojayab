import Cardsh1 from "./components/tag-h1-head/Cardsh1";
import Cards from "./components/Cards/Cards";
import Boxsatresi from "./components/Boxsatresi/Boxsatresi";
import Carddasresi from "./components/tag-h1-head/Carddastresi"







const index = () => {
  return (
    <>
    <style jsx > {`
    
   .card-dastresi{

   }
    
    `} </style>
      
      {/* کارت های دسترسی سریع */}

<Carddasresi/>
      <div className="h-[100px] w-[100%]  flex justify-center mt-[2%]  ">
        <div className="h-[100px] w-[70%]  flex justify-evenly items-center ">   <Boxsatresi /></div>
      </div>


      {/*  تخفیف های ویژه این ماه */}
      <Cardsh1 />
      <div className="w-[100%]  h-[500px] flex items-center justify-center ">
        <div className=" w-[80%]  h-[500px]  flex justify-around ">
          <div className="w-[400px] h-[500px] flex items-center justify-center ">
            <Cards />
          </div>
          <div className="w-[400px] h-[500px]  flex items-center justify-center ">
            <Cards />
          </div>
          <div className="w-[400px] h-[500px]  flex items-center justify-center ">
            <Cards />
          </div>
        </div>
      </div>
    
   
    </>
  );
};

export default index;
