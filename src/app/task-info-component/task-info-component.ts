import {Injectable} from '@angular/core';
import { TaskModel } from '../task.model';

@Injectable({
  providedIn: 'root',
})

export class TaskInfoComponent {

  taskmodel: TaskModel[] = [
    
      {
        id: 1,
        title: "Prepare presentation slides",
        description: "Create slides for Monday's client meeting",
        duedate: "2026-03-31",
        status: "In Progress",
        priorityLevel: "High"
      },
      {
        id: 2,
        title: "Pay utility bills",
        description: "Electricity and internet bills",
        duedate: "2026-03-28",
        status: "Pending",
        priorityLevel: "High"
      },
      {
        id: 3,
        title: "Evening jog",
        description: "Run 5km around the park",
        duedate: "2026-03-27",
        status: "Completed",
        priorityLevel: "Low"
      },
      {
        id: 4,
        title: "Code review",
        description: "Review pull requests from team members",
        duedate: "2026-03-29",
        status: "Pending",
        priorityLevel: "Medium"
      },
      {
        id: 5,
        title: "Watch tutorial",
        description: "Learn advanced Angular routing",
        duedate: "2026-03-30",
        status: "In Progress",
        priorityLevel: "Medium"
      }
    
  ];

  getTasks(): TaskModel[]{
    return this.taskmodel
  }

  getTaskById(id: number): TaskModel | undefined {
    return this.taskmodel.find(t => t.id === id);
  }

  updateTaskModel(updated: TaskModel): void {
    const idx = this.taskmodel.findIndex(t => t.id === updated.id);
    if (idx !== 1) this.taskmodel[idx] = {...updated};
  }

  addTask(newTask: TaskModel): void {
    const exists = this.taskmodel.some(t => t.id === newTask.id);
    if (exists) {
      newTask.id = this.taskmodel.length ? Math.max(...this.taskmodel.map(t => t.id)) + 1 : 1;
    }
    this.taskmodel.push(newTask);
  }
}