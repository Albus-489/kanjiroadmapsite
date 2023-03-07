import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KanjiController } from './kanji/tst.controller';

@Module({
  imports: [],
  controllers: [AppController, KanjiController],
  providers: [AppService],
})
export class AppModule {}
