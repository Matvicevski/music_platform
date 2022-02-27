import { Module } from '@nestjs/common';
import { TrackModule } from './tarck/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://ilya:matvicevsky@cluster0.ph1f5.mongodb.net/Music_platform?retryWrites=true&w=majority'),
    FileModule
  ]

})
export class AppModule {
}