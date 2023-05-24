import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import {
    TodoTypicodeResponse,
    TodoTypicodeResponseData,
} from './response-in/todo-typicode.response';
import { lastValueFrom } from 'rxjs';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService) {}

    async fetchData(): Promise<TodoTypicodeResponseData> {
        const response = await lastValueFrom(
            this.httpService.get<AxiosResponse<TodoTypicodeResponse>>(
                'https://jsonplaceholder.typicode.com/todos/1',
            ),
        ).catch((err) => {
            console.log(err);
        });

        const parsedResponse = plainToInstance(TodoTypicodeResponse, response, {
            enableCircularCheck: true,
        });

        return parsedResponse.data;
    }
}
