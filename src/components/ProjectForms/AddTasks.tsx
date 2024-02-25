//@ts-nocheck
import { useState } from "react";
import { Button } from "../ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


function AddTasks({ setFormSlide }: any) {
    const handleBack = () => { setFormSlide(4) }
    const handleNext = () => { setFormSlide(5) }

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

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
                    <Input
                    type="text"
                    id="newTask"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Add new tasks" />
                    <Button onClick={addTask} className="bg-blue-500 hover:bg-blue-600 text-white">Add</Button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={task.checked}
                                onChange={() => toggleTask(index)}
                            />
                            <span style={{ textDecoration: task.checked ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                            <button onClick={() => deleteTask(index)}>Delete</button>
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
