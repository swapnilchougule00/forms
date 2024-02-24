import {
    CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react"

function ProjectType() {
    const [fee , setFee] =useState(1)
    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Project Type</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                    Don't panic - you can also customize this types in settings</CardDescription>
            </CardHeader>
            <CardContent >
                <form >
                    <div className=" border text-sm cursor-pointer font-semibold rounded-lg  text-center flex">
                        <p className={`w-full ${fee ===1 &&  'bg-blue-500 text-white'}  rounded-l-lg  p-2`} onClick={()=>setFee(1)}>Time & Material</p>
                        <p className={`w-full ${fee ===2 &&  'bg-blue-500 text-white'} border-x   p-2`} onClick={()=>setFee(2)}>Fixed Fee</p>
                        <p className={`w-full ${fee ===3 &&  'bg-blue-500 text-white'}  rounded-r-lg  p-2`} onClick={()=>setFee(3)}>Non-Billable</p>
                    </div>
                    <div className="grid w-full items-center gap-4 mt-4">
                        <div>
                            <Label htmlFor="client">Hourly</Label>
                            <p className="text-sm text-slate-500">We need hourly rates to track your project's billable amount </p>
                        </div>
                        <div className="flex justify-center w-[80%] gap-2 items-center ">
                            <Select>
                                <SelectTrigger id="client">
                                    <SelectValue placeholder="Select " />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="hourly">project hourly rate</SelectItem>
                                    <SelectItem value="daily">project daily rate</SelectItem>
                                    <SelectItem value="monthly">project monthly rate</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-gray-500 text-sm">Or</p>
                            <Input id="client" className="w-[40%]" placeholder="₹ 1000" />
                        </div>
                        <div>
                            <Label htmlFor="client">Budget</Label>
                            <p className="text-sm text-slate-500">We need hourly rates to track your project's billable amount </p>
                        </div>
                        <div className="flex justify-center w-[50%] gap-2 items-center ">
                            <Select>
                                <SelectTrigger id="client">
                                    <SelectValue placeholder="Select " />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="hours">Hours per person</SelectItem>
                                    <SelectItem value="days">Days per person</SelectItem>
                                    <SelectItem value="months">Months per person</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center mt-2 space-x-2">
                            <Checkbox id="terms" />
                            <Label
                                htmlFor="terms"
                                className="text-sm text-slate-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Budget resets every month
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label
                                htmlFor="terms"
                                className="text-sm text-slate-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Send email alerts fi project exceeds <span className="p-1 border rounded-lg">80%</span> of the budget
                            </Label>
                        </div>
                    </div>
                </form>
            </CardContent>
        </div>
    )
}

export default ProjectType
