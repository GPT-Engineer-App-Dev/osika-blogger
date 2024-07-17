import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Task Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <Button onClick={handleAddTask}>Add</Button>
          </div>
          <ul className="space-y-2">
            {tasks.map((t, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <span>{t}</span>
                <Button variant="destructive" size="sm" onClick={() => handleRemoveTask(index)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-500">Total tasks: {tasks.length}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;