export interface TaskModel {
    id: number;
    title: string;
    description: string;
    duedate: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    priorityLevel: 'Low' | 'Medium' | 'High';
}

