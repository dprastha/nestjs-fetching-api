import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api/api.service';

@Module({
    // Import HTTP Module
    imports: [HttpModule],
    controllers: [AppController],
    providers: [ApiService],
})
export class AppModule {}
