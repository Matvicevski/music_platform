import { Module } from '@nestjs/common';
import { TrackModule } from './tarck/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://ilya:matvicevsky@cluster0.ph1f5.mongodb.net/Music_platform?retryWrites=true&w=majority')
  ]

})
export class AppModule {
}