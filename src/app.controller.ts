import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoTypicodeResponseData } from './response-in/todo-typicode.response';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getHello(): Promise<TodoTypicodeResponseData> {
        return await this.appService.fetchData();
    }
}
