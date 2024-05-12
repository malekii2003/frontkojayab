import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
/* آیکون  */
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PoolIcon from "@mui/icons-material/Pool";
import VillaIcon from '@mui/icons-material/Villa';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CottageIcon from '@mui/icons-material/Cottage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MosqueIcon from '@mui/icons-material/Mosque';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 130,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  display: "flex",
  
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

export default function SquareCorners() {
  return (
<>
<style jsx> {`
.estakhr{
    
}



`} </style>


    <Stack direction="row" spacing={2}>
   
      
      <DemoPaper square={false} className="text-[18px]  " >
        <PoolIcon className="text-[#f03e58] text-[40px]  "  /> استخر دار
      </DemoPaper>

      <DemoPaper square={false} className="text-[18px]  " >
        <VillaIcon  className="text-[#f03e58] text-[40px]   "/> ویلای شمال
      </DemoPaper>

      <DemoPaper square={false} className="text-[18px]  " >
        <BeachAccessIcon className="text-[#f03e58] text-[40px]  " /> ساحل جنوب
      </DemoPaper>

      <DemoPaper square={false} className="text-[18px]  " >
        <CottageIcon className="text-[#f03e58] text-[40px]   " /> لوکس
      </DemoPaper>

      <DemoPaper square={false} className="text-[18px]  " >
        <CelebrationIcon className="text-[#f03e58] text-[40px]   " /> مناسب جشن
      </DemoPaper>

      <DemoPaper square={false} className="text-[18px]  " >
        <MosqueIcon className="text-[#f03e58]  text-[40px]  " /> ترکیه 
      </DemoPaper>

      <DemoPaper square={false} className="text-[18px]  " >
        <CalendarMonthIcon className="text-[#f03e58] text-[40px]   " /> آنی
      </DemoPaper>


         <DemoPaper square={false} className="text-[18px]  " > 
        <OtherHousesIcon className="text-[#f03e58] text-[40px]   " /> کلبه جنگلی
      </DemoPaper>
    </Stack>
    </>
  );
}
