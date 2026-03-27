import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskModel } from '../task.model';
import { TaskInfoComponent } from '../task-info-component/task-info-component';

@Component({
  selector: 'app-task-add-component',
  imports: [FormsModule],
  templateUrl: './task-add-component.html',
  styleUrl: './task-add-component.css',
})
export class TaskAddComponent {
  taskmodel: TaskModel = {
    id: 0,
    title: '',
    description: '',
    duedate: '',
    status: 'Pending',
    priorityLevel: 'Low'
  };

  constructor(
    private router: Router, 
    private taskInfo: TaskInfoComponent
    ) {}

  addTask(): void {
    this.taskInfo.addTask(this.taskmodel);
    this.router.navigate(['/t-list']);
  }

  cancel(): void {
    this.router.navigate(['/t-list']);
  }
}