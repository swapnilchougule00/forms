import {
    CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

function ProjectType({ setFormSlide }:any) {
    const [fee, setFee] = useState(1)
    const [typeData, setTypeData] = useState({
        fee: fee,
        hours: '',
        hoursor: '',
        budget: '',
        checkBudget: false,
        checkEmail: false
    })

    const [typeErrors , setTypeErrors] =useState({
        hoursError:'',
        budgetError:''
    })

    useEffect(() => {
        const savedTypeData = localStorage.getItem('typeData');
        console.log(savedTypeData)
        if (savedTypeData) {
            setTypeData(JSON.parse(savedTypeData));
        }
    }, []);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setTypeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleBack = () => { setFormSlide(1) }
    const handleNext = () => {
        let isValid =true

        if(typeData.hours === ''){
            setTypeErrors((prevErrors) => ({
                ...prevErrors,
                hoursError: "Please select hours field",
            }))
            isValid = false;
        }

        if(typeData.budget === ''){
            setTypeErrors((prevErrors) => ({
                ...prevErrors,
                budgetError: "Please select budget field",
            }))
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem('typeData', JSON.stringify(typeData));
            setFormSlide(3)
        }
    }

    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Project Type</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                    Don't panic - you can also customize this types in settings</CardDescription>
            </CardHeader>
            <CardContent >
                <form >
                    <div className=" border md:text-sm cursor-pointer font-semibold rounded-lg text-xs  text-center flex">
                        <p className={`w-full ${fee == 1 && 'bg-blue-500 text-white'}  rounded-l-lg items-center justify-center flex  p-2`} onClick={() => setFee(1)}>Time & Material</p>
                        <p className={`w-full ${fee == 2 && 'bg-blue-500 text-white'} border-x items-center justify-center flex  p-2`} onClick={() => setFee(2)}>Fixed Fee</p>
                        <p className={`w-full ${fee == 3 && 'bg-blue-500 text-white'}  rounded-r-lg items-center justify-center flex  p-2`} onClick={() => setFee(3)}>Non-Billable</p>
                    </div>
                    <div className="grid w-full items-center md:gap-1 gap-3 mt-4">
                        <div>
                            <Label htmlFor="hours">Hourly</Label>
                            <p className="text-sm text-slate-500">We need hourly rates to track your project's billable amount </p>
                        </div>
                        <div className="flex justify-center w-full md:w-[80%] gap-2 items-center ">
                            <select
                                className="w-full border p-1.5 rounded-md"
                                id="hours"
                                name="hours"
                                value={typeData.hours}
                                onChange={handleInputChange}
                            >
                                <option value="">Select</option>
                                <option value="hourly">project hourly rate</option>
                                <option value="daily">project daily rate</option>
                                <option value="monthly">project monthly rate</option>
                            </select>

                            <p className="text-gray-500 text-sm">Or</p>
                            <Input id="hoursor" name="hoursor" value={typeData.hoursor} onChange={handleInputChange} className="w-[40%]" placeholder="₹ 1000" />
                        </div>
                        {typeErrors.hoursError && <p className="text-red-500 text-sm">{typeErrors.hoursError}</p>}

                        <div>
                            <Label htmlFor="client">Budget</Label>
                            <p className="text-sm text-slate-500">We need hourly rates to track your project's billable amount </p>
                        </div>
                        <div className="flex justify-center w-[60%] md:w-[50%] gap-2 items-center ">
                            <select
                                className="w-full border p-1.5 rounded-md"
                                id="budget"
                                name="budget"
                                value={typeData.budget}
                                onChange={handleInputChange}
                            >
                                <option value="">Select</option>
                                <option value="hours">Hours per person</option>
                                <option value="days">Days per person</option>
                                <option value="months">Months per person</option>
                            </select>
                        </div>
                        {typeErrors.budgetError && <p className="text-red-500 text-sm">{typeErrors.budgetError}</p>}

                        <div className="flex items-center mt-2 text-xs space-x-2">
                            <input type="checkbox" id="budget" name="checkBudget" checked={typeData.checkBudget} onChange={handleInputChange} />
                            <Label
                                htmlFor="budget"
                                className="text-sm text-slate-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Budget resets every month
                            </Label>
                        </div>
                        <div className="flex items-center mt-2 space-x-2">
                            <input type="checkbox" id="email" name="checkEmail" checked={typeData.checkEmail} onChange={handleInputChange} />
                            <Label
                                htmlFor="email"
                                className="text-sm text-slate-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Send email alerts fi project exceeds <span className="p-1 border rounded-lg">80%</span> of the budget
                            </Label>
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

export default ProjectType
