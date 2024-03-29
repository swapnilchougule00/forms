//@ts-nocheck
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { X } from "lucide-react";


function AddTasks({ setFormSlide }) {
    const values = [
        { text: 'Marketing Website Design', checked: false },
        { text: 'Branding Design', checked: false },
        { text: 'UI/UX Fundamentals', checked: true },
        { text: 'Wireframe and Prototyping', checked: false },
        { text: 'Style Guide', checked: false },
        { text: 'Layout Design', checked: false },
    ]
    const handleBack = () => { localStorage.setItem('tasks', JSON.stringify(tasks)); setFormSlide(4) }
    const handleNext = () => { localStorage.setItem('tasks', JSON.stringify(tasks)); setFormSlide(5) }

    const [tasks, setTasks] = useState(values);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks')
        savedTasks && setTasks(JSON.parse(savedTasks))
    }, [])

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, { text: newTask, checked: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, checked: !task.checked } : task
            )
        );
    };

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
    };


    return (
        <div>
            <CardHeader className="w-full text-center font-semibold font-roboto">
                <CardTitle className="tracking-wider">Add Tasks</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col mt-4 md:mt-0 font-semibold text-slate-400 gap-4">
                <Label className="text-black">Tasks</Label>
                <div className="flex gap-4">
                    <Input className="focus:outline focus:outline-blue-400"
                        type="text"
                        id="newTask"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Add new tasks" />
                    <Button onClick={addTask} className="bg-blue-500  hover:bg-blue-600 text-white">Add</Button>
                </div>
                <ul className="h-[300px] md:h-[300px] space-y-1 overflow-y-scroll overflow-hidden">
                    {tasks.map((task, index) => (
                        <li key={index} className="border-b p-2 flex text-slate-600 items-center justify-between">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={task.checked}
                                    onChange={() => toggleTask(index)}
                                />
                                <span>
                                    {task.text}
                                </span>
                            </div>
                            <button onClick={() => deleteTask(index)}> <X className="w-4" /> </button>
                        </li>
                    ))}
                </ul>
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

export default AddTasks
