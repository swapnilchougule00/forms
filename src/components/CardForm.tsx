
import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
} from "@/components/ui/card"

import { useState } from "react"
import CreateProject from "./ProjectForms/CreateProject"
import ProjectType from "./ProjectForms/ProjectType"
import { X } from "lucide-react"
import SelectView from "./ProjectForms/SelectView"
import ManageProjects from "./ProjectForms/ManageProjects"

export function CardForm() {

  const [formSlide ,setFormSlide] = useState(1)

  const handleNext=()=>{
    if(formSlide<4){
      setFormSlide(formSlide+1)
    }
  }
  const handleBack=()=>{
    if(formSlide>1){
      setFormSlide(formSlide-1)
    }
  }
  return (
<Card className="md:w-[35%] w-[90%]  shadow-lg p-4 h-[90%] relative">
    <X className="absolute right-2 top-2"/>
      {formSlide == 1 && <CreateProject/>}
      {formSlide == 2 && <ProjectType/>}
      {formSlide == 3 && <SelectView/>}
      {formSlide == 4 && <ManageProjects/>}
      <CardFooter className="absolute bottom-0 w-[60%] flex justify-between">
        <Button onClick={handleBack} variant="outline" className="border-none hover:bg-none gap-3 text-slate-500"> <span className="text-xs font-bold">ᐸ</span>  Back</Button>
        <Button onClick={handleNext} className="bg-blue-500 py-2 px-6 hover:bg-blue-600">Next</Button>
      </CardFooter>
    </Card>
  )
}
