export class TodoTypicodeResponse {
    data: TodoTypicodeResponseData;
}

export class TodoTypicodeResponseData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
