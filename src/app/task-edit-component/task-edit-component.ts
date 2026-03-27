import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskModel } from '../task.model';
import { TaskInfoComponent } from '../task-info-component/task-info-component';

@Component({
  selector: 'app-task-edit-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent implements OnInit {

  taskmodel: TaskModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskInfo: TaskInfoComponent
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskmodel = this.taskInfo.getTaskById(id);
  }

  saveTask(): void {
    if (this.taskmodel) {
      this.taskInfo.updateTaskModel(this.taskmodel);
      this.router.navigate(['/t-list']);
    }
  }

  goBack(): void {
    this.router.navigate(['/t-list']);
  }
}