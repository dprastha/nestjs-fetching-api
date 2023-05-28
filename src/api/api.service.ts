import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import {
    TodoTypicodeResponse,
    TodoTypicodeResponseData,
} from './todo-typicode.response';
import { lastValueFrom } from 'rxjs';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) {}

    async fetchData(): Promise<TodoTypicodeResponseData> {
        //  Get TodoTypicodeResponse using axios
        const response = await lastValueFrom(
            // Add the type of the response
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
