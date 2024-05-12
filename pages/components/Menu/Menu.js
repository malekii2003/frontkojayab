import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";







export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( newValue) => {
    setValue(newValue);
  };

  return (
<>


    
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background" }} className="box" >
      <Tabs
      sx={{
        fontFamily: 'Raleway',
      }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className=" w-[500px] "
        >
        {/*  میزبان شوید */}
        <div className="items-center flex justify-center text-black ">
          <HomeIcon />
        </div>
        <Tab label="میزبان شوید" className="text-black font-bold " />

        {/*         دانلود اپلیکشن*/}
        <div className="flex justify-center items-center  text-black">
          <SaveAltIcon />
        </div>
        <Tab label="دانلود اپلیکشن" className="text-black font-bold  " />
        {/* پشتیبانی */}
        <div className="flex justify-center items-center  text-black ">
          <SupportAgentIcon />
        </div>
        <Tab label="پشتیبانی" className="text-black font-bold   " />
        {/*  ورد ثبت نام */}
        <div className="flex justify-center items-center  text-black">
          <PersonOutlineIcon />
        </div>
        <Tab label="ورود/ثبت نام" className="text-black  font-bold  " />
      </Tabs>
    </Box>
        </>
  );
}
