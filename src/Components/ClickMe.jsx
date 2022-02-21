import React, { useState } from 'react'
import './Clickme.css'

const ClickMe = () => {



const BackColor = "#9D79BC" 
const BackColorArr =  ["#8CA0D7" , "#A14DA0" , "#DBD2E0" , "#C2F9BB"  , "#9AD1D4"  , "#20063B" , "#A6CFD5" , "#91C4F2" , "#E9CE2C" , "#F9DC5C" , "#69A197"  , "#E2DBBE" , "#FAF3DD" , "#AF3800"  ,"#FE621D" , "#00CFC1" , "#00FFE7" , "#FD5200" , "#E26D5A" , "#EFA8B8" , "# D7BBA8" , "#BBB09B" , "#3E2A35",  "#1C3144"  ,"#596F62" , "#7EA16B" , "#C3D898" , "#ACD2ED" , "#E1E289"  ,  "#0A210F" , "#40BCD8"  ,"#39A9DB"  ,"#1C77C3"               ] 


const [bg , setBg] = useState(BackColor) ;



const bgChange = () => {
    
    
    // var randomItem = BackColorArr[Math.floor(Math.random() * BackColorArr.length)] ;
    var randomItem = BackColorArr[Math.floor(Math.random() * BackColorArr.length)]  ;
    console.log(randomItem);
    setBg(randomItem)

}

  return (
    <>
        <div style={ { backgroundColor : bg } }>
            <button onClick={bgChange}> Click Me </button>
        </div>

    </>
  )
}

export default ClickMe
