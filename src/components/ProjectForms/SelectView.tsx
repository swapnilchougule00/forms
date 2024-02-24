import {
    CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"


function SelectView() {
    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Select view</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                    you can also customize this view in settings</CardDescription>
            </CardHeader>
               
                 <CardContent>
                    <div>list</div>
                    <div>Board</div>
                 </CardContent>
        </div>
    )
}

export default SelectView
