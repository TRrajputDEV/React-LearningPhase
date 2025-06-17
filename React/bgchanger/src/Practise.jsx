import React, { useState } from 'react'

function Practise() {

    const [color, setColor] = useState("black");

    // bnaao toh new colors k liye random function

    const getRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

        setColor(randomColor);
    }

    return (
        <>
            {/* setting up the background yayy */}
            <div className='w-full h-screen flex items-center justify-center duration-500 overflow-hidden relative'
                style={{ backgroundColor: color }}
            >
                {/* Animation for background */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient"></div>

                {/* button panel */}

                <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-4 rounded-3xl backdrop-blur-sm bg-opacity-80'>
                        {
                            ["red", "yellow", "orange", "olive", "purple", "pink", "cyan", "green"].map((bgColor)=>(
                                    <button
                                    key={bgColor}
                                    onClick={()=> setColor(bgColor) }
                                    className="outline-none px-4 py-1 rounded-full text-slate-900 shadow-lg hover:scale-110 transition-all"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        bgColor
                                    </button>
                            ))
                        }

                        <button
            onClick={getRandomColor}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-gray-300 hover:scale-110 transition-all"
          >
            Random Color
          </button>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Practise;
