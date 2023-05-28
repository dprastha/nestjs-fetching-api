import { Controller, Get } from '@nestjs/common';
import { TodoTypicodeResponseData } from './api/todo-typicode.response';
import { ApiService } from './api/api.service';

@Controller()
export class AppController {
    constructor(private readonly apiService: ApiService) {}

    @Get()
    async getHello(): Promise<TodoTypicodeResponseData> {
        return await this.apiService.fetchData();
    }
}
