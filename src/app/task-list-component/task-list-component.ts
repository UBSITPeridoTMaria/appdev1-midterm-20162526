import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskModel } from '../task.model';
import { TaskInfoComponent } from '../task-info-component/task-info-component';

@Component({
  selector: 'app-task-list-component',
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent implements OnInit{

  taskmodel: TaskModel[] = [];
  returnUrl: string | null = null;
  selectedId: number | null = null;

  constructor (
    private taskInfo: TaskInfoComponent,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.taskmodel = this.taskInfo.getTasks();
  }

  getTasks(t: TaskModel): void {
    this.selectedId = t.id;
    this.router.navigate(['/t-list', t.id, 't-edit']);
  }
}