import { Button } from "../ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


function AddTasks({setFormSlide}:any) {
    const handleBack = () => { setFormSlide(4) }
    const handleNext = () => {  setFormSlide(5) }

    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Add Tasks</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col mt-4 md:mt-0 font-semibold text-slate-400 gap-4">
            <Label className="text-black">Tasks</Label>
            <div className="flex gap-4">
                <Input placeholder="Add new tasks"/>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Add</Button>
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

export default AddTasks
