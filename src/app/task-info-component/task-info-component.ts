import {Injectable} from '@angular/core';
import { TaskModel } from '../task.model';

@Injectable({
  providedIn: 'root',
})

export class TaskInfoComponent {

  taskmodel: TaskModel[] = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete and submit the final report",
      duedate: "2026-04-01",
      status: "In Progress",
      priorityLevel: "High"
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruits",
      duedate: "2026-03-28",
      status: "Pending",
      priorityLevel: "Medium"
    },
    {
      id: 3,
      title: "Morning workout",
      description: "30 minutes cardio and strength training",
      duedate: "2026-03-27",
      status: "Completed",
      priorityLevel: "Low"
    },
    {
      id: 4,
      title: "Team meeting",
      description: "Sprint planning with the development team",
      duedate: "2026-03-29",
      status: "Pending",
      priorityLevel: "High"
    },
    {
      id: 5,
      title: "Read documentation",
      description: "Review Angular best practices",
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