import {
    CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"


function ManageProjects({setFormSlide}:any) {
    const [access, setAccess] = useState('everyone')
    
    useEffect(()=>{
        const savedAccess = localStorage.getItem('Access')
        savedAccess && setAccess(savedAccess)
    },[])

    const handleBack = () => { localStorage.setItem('Access',access); setFormSlide(3) }
    const handleNext = () => {localStorage.setItem('Access',access);  setFormSlide(4) }
    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Who can manage projects</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                    Don't panic -   you can also customize this view in settings</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 flex flex-col mt-4 md:mt-0 justify-center">
                <div  className={`${access == 'everyone' && 'border-blue-500'}  h-[90px] border-2 flex gap-4 cursor-pointer justify-center items-center px-4 p-2 rounded-lg`} onClick={() => setAccess('everyone')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-slate-400 w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>

                    <div className="w-[80%]">
                        <h1 className="text-xl font-semibold">Everyone</h1>
                        <p className="md:text-sm text-xs text-slate-500 ">All users can now access to see it, but guest cannot access the project</p>
                    </div>
                </div>

                <div onClick={() => setAccess('admin')} className={`${access == 'admin' && 'border-blue-500'} h-[90px]  border-2 flex gap-4 cursor-pointer justify-center items-center px-4 p-2 rounded-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-slate-400 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div className="w-[80%]">
                        <h1 className="text-xl font-semibold">Only admin's</h1>
                        <p className="md:text-sm text-xs text-slate-500 ">Only admin's can manage everything</p>
                    </div>
                </div>

                <div onClick={() => setAccess('specific')} className={`${access == 'specific' && 'border-blue-500'} h-[90px] border-2 flex gap-4 cursor-pointer justify-center items-center px-4 p-2 rounded-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-slate-400 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <div className="w-[80%]">
                        <h1 className="text-xl font-semibold">Only to specific people</h1>
                        <p className="md:text-sm text-xs text-slate-500 ">Only some specific people can able to it</p>
                    </div>
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

export default ManageProjects
