
import {
  Card,
} from "@/components/ui/card"

import { useState } from "react"
import CreateProject from "./ProjectForms/CreateProject"
import ProjectType from "./ProjectForms/ProjectType"
import { X } from "lucide-react"
import SelectView from "./ProjectForms/SelectView"
import ManageProjects from "./ProjectForms/ManageProjects"
import AddTasks from "./ProjectForms/AddTasks"

export function CardForm() {

  const [formSlide, setFormSlide] = useState(1)

  return (
    <Card className="lg:w-[35%] md:w[70%] w-[90%]  shadow-lg p-4 h-[90%] relative">
      <X className="absolute right-2 top-2" />
      {formSlide == 1 && <CreateProject setFormSlide={setFormSlide}/>}
      {formSlide == 2 && <ProjectType setFormSlide={setFormSlide} />}
      {formSlide == 3 && <SelectView setFormSlide={setFormSlide} />}
      {formSlide == 4 && <ManageProjects setFormSlide={setFormSlide}/>}
      {formSlide == 5 && <AddTasks setFormSlide={setFormSlide}/>}
      
    </Card>
  )
}
