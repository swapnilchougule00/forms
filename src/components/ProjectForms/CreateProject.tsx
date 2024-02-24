import {
    CardContent, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "../ui/DatePicker"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

function CreateProject({ setFormSlide }:any ) {

    const [formData, setFormData] = useState({
        name: '',
        client: '',
        startDate: '',
        endDate: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        client: '',
        startDate: '',
        endDate: '',
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
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

        if(isValid){
            localStorage.setItem('formData', JSON.stringify(formData));
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
                                <Select>
                                    <SelectTrigger name="client" value={formData.client} onChange={handleInputChange}  id="client">
                                        <SelectValue  placeholder="Select a client" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-gray-500 text-sm">Or</p>
                                <Input id="client" name="client" value={formData.client} onChange={handleInputChange}  className="w-[40%]" placeholder="New client" />
                            </div>
                            {formErrors.client && <p className="text-red-500 text-sm">{formErrors.client}</p>}

                        </div>

                        <div>
                            <Label htmlFor="client">Dates</Label>
                            <div className="flex gap-4">
                                <DatePicker />
                                <DatePicker />
                            </div>
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
