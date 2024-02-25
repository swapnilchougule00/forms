import {
    CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"


function SelectView({setFormSlide}:any) {
    const [view, setView] = useState('list')

    useEffect(()=>{
        const savedView = localStorage.getItem('view')
        savedView && setView(savedView)
    },[])

    const handleBack = () => { localStorage.setItem('view' ,view);
         setFormSlide(2) }
    const handleNext = () => { localStorage.setItem('view' ,view); setFormSlide(4) }

    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Select view</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                    you can also customize this view in settings</CardDescription>
            </CardHeader>

            <CardContent className="flex mt-4 md:mt-0 font-semibold text-slate-400 gap-4">
                <div className="w-full cursor-pointer text-center" onClick={() => setView('list')}>
                    <div className={`${view === 'list' && 'border-blue-500 text-black'}  border-2 flex flex-col justify-center items-center p-4 rounded-lg`}>
                        <img src="https://img.icons8.com/?size=100&id=8x85EzJNs1Dl&format=png" alt="list" />
                    </div>
                    <h1 className={`${view == 'list' && 'text-black'}`}>List</h1>
                </div>
                <div className="w-full cursor-pointer text-center" onClick={() => setView('board')}>
                    <div className={`${view === 'board' && 'border-blue-500 !text-black'}  border-2 flex flex-col justify-center items-center p-4 rounded-lg`}>
                        <img src="https://img.icons8.com/?size=100&id=8x85EzJNs1Dl&format=png" alt="Board" />
                    </div>
                    <h1 className={`${view == 'board' && 'text-black'}`}>Board</h1>
                </div>

            </CardContent>
            <CardFooter className="absolute bottom-0 w-[60%] flex justify-between">
                <Button onClick={handleBack} variant="outline" className="border-none hover:bg-none gap-2 flex items-center text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Back</Button>
                <Button onClick={handleNext} className="bg-blue-500 py-2 px-6 hover:bg-blue-600">Next</Button>
            </CardFooter>
        </div>
    )
}

export default SelectView
