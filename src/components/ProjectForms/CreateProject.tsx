import {
    CardContent, CardHeader, CardTitle,
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

function CreateProject() {
    return (
        <div>
            <CardHeader className="w-full text-center tracking-widest font-semibold font-roboto">
                <CardTitle className="tracking-wider">Create a project</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent >
                <form>
                    <div className="grid w-full items-center space-y-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input required id="name" placeholder="Enter the project name here" />
                        </div>
                        <div>
                            <Label htmlFor="client">Client</Label>
                            <div className="flex justify-center gap-2 items-center ">
                                <Select>
                                    <SelectTrigger id="client">
                                        <SelectValue placeholder="Select a client" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-gray-500 text-sm">Or</p>
                                <Input id="client" className="w-[40%]" placeholder="New client" />
                            </div>
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
                            <Textarea placeholder="Optional" />
                        </div>
                    </div>

                </form>
            </CardContent>
        </div>
    )
}

export default CreateProject
