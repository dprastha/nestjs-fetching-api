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
        //  Get TodoTypicodeResponse using axios
        const response = await lastValueFrom(
            this.httpService.get<AxiosResponse<TodoTypicodeResponse>>(
                'https://jsonplaceholder.typicode.com/todos/1',
            ),
        ).catch((err) => {
            console.log(err);
        });

        // Parse the response from axios response
        const parsedResponse = plainToInstance(TodoTypicodeResponse, response, {
            enableCircularCheck: true,
        });

        return parsedResponse.data;
    }
}
