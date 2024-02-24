import {
    CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { useState } from "react"


function SelectView() {
    const [view ,setView] = useState('list')
    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Select view</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                    you can also customize this view in settings</CardDescription>
            </CardHeader>

            <CardContent className="flex font-semibold text-slate-400 gap-4">
                <div className="w-full cursor-pointer text-center" onClick={()=>setView('list')}>
                    <div className={`${view === 'list' && 'border-blue-500 text-black'}  border-2 flex flex-col justify-center items-center p-4 rounded-lg`}>
                        <img src="https://img.icons8.com/?size=100&id=8x85EzJNs1Dl&format=png" alt="list" />
                    </div>
                    <h1 className={`${view == 'list' && 'text-black'}`}>List</h1>
                </div>
                <div className="w-full cursor-pointer text-center"  onClick={()=>setView('board')}>
                <div className={`${view === 'board' && 'border-blue-500 !text-black'}  border-2 flex flex-col justify-center items-center p-4 rounded-lg`}>
                        <img src="https://img.icons8.com/?size=100&id=8x85EzJNs1Dl&format=png" alt="Board" />
                    </div>
                    <h1 className={`${view == 'board' && 'text-black'}`}>Board</h1>
                </div>
                
            </CardContent>
        </div>
    )
}

export default SelectView
