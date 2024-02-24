import {
    CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"


function ManageProjects() {
    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Who can manage projects</CardTitle>
                <CardDescription className="text-xs tracking-wide text-slate-400">
                 Don't panic -   you can also customize this view in settings</CardDescription>
            </CardHeader>
               
                 <CardContent>
                    <div>everyone</div>
                    <div>admin</div>
                    <div>spesific people</div>
                 </CardContent>
        </div>
    )
}

export default ManageProjects
