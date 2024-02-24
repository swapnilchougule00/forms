
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

  const [formSlide, setFormSlide] = useState(1)

  const handleNext = () => {
    if (formSlide < 4) {
      setFormSlide(formSlide + 1)
    }
  }
  const handleBack = () => {
    if (formSlide > 1) {
      setFormSlide(formSlide - 1)
    }
  }
  return (
    <Card className="md:w-[35%] w-[90%]  shadow-lg p-4 h-[90%] relative">
      <X className="absolute right-2 top-2" />
      {formSlide == 1 && <CreateProject />}
      {formSlide == 2 && <ProjectType />}
      {formSlide == 3 && <SelectView />}
      {formSlide == 4 && <ManageProjects />}
      <CardFooter className="absolute bottom-0 w-[60%] flex justify-between">
        <Button onClick={handleBack} variant="outline" className="border-none hover:bg-none gap-2 flex items-center text-slate-500">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
          Back</Button>
        <Button onClick={handleNext} className="bg-blue-500 py-2 px-6 hover:bg-blue-600">Next</Button>
      </CardFooter>
    </Card>
  )
}
