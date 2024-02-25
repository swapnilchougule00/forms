import {
    CardContent, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import * as React from "react"
import { CalendarIcon, Plus } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



function CreateProject({ setFormSlide }: any) {

    const [startDate, setStartDate] = React.useState<Date>()
    const [endDate, setEndDate] = React.useState<Date>()
    const [formData, setFormData] = useState({
        name: '',
        client: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        client: '',
        date: '',
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        const startDate = localStorage.getItem('startDate');
        const endDate = localStorage.getItem('endDate');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
            setStartDate(startDate)
            setEndDate(endDate)
        }
    }, []);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNext = () => {
        let isValid = true

        if (!formData.name.trim()) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Error message for the name field',
            }))
            isValid = false;
        }

        if (!formData.client.trim()) {
            console.log(formData)
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                client: 'Client message for the name field',
            }))
            isValid = false;
        }

        if (!startDate || !endDate) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                date: 'date message for the name field',
            }))
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem('formData', JSON.stringify(formData));
            localStorage.setItem('startDate', startDate)
            localStorage.setItem('endDate', endDate)
            setFormSlide(2)
        }
    }

    const handleBack = () => { setFormSlide(1) }


    return (
        <div>
            <CardHeader className="w-full text-center tracking-widest font-semibold font-roboto">
                <CardTitle className="tracking-wider">Create a project</CardTitle>
            </CardHeader>
            <CardContent >
                <form>
                    <div className="grid w-full items-center space-y-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input required id="name" value={formData.name} onChange={handleInputChange} name="name" placeholder="Enter the project name here" />
                            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor="client">Client</Label>
                            <div className="flex justify-center gap-2 items-center ">
                                <select
                                    className="w-full border p-1.5 rounded-md"
                                    id="client"
                                    name="client"
                                    value={formData.client}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select a client</option>
                                    <option value="next">Next.js</option>
                                    <option value="sveltekit">SvelteKit</option>
                                    <option value="astro">Astro</option>
                                    <option value="nuxt">Nuxt.js</option>
                                </select>
                                <p className="text-gray-500 text-sm">Or</p>
                                <Button onClick={(e) => e.preventDefault()} className="bg-white text-slate-400 gap-2 border hover:bg-white"> <Plus className="w-4" /> New client</Button>
                            </div>
                            {formErrors.client && <p className="text-red-500 text-sm">{formErrors.client}</p>}

                        </div>

                        <div>
                            <Label htmlFor="client">Dates</Label>
                            <div className="flex gap-4">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !startDate && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={startDate}
                                            onSelect={setStartDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !endDate && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={endDate}
                                            onSelect={setEndDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            {formErrors.date && <p className="text-red-500 text-sm">{formErrors.date}</p>}
                        </div>

                        <div>
                            <Label htmlFor="client">Notes</Label>
                            <Textarea placeholder="Optional" className="h-full" />
                        </div>
                    </div>

                </form>
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

export default CreateProject
