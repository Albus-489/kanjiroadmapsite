import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTstDto } from './DTO/create-tst.dto';

@Controller('tst')
export class KanjiController {

    @Get()
    getAll(){
        return 'TST CONTROLLER'
    }

    @Get(':id')
    getOne(@Param('id') id){
        return 'Params: ' + id;
    }

    // ? To get data from bod you need to declare a body decorator
    @Post()
    postTst(@Body() createTstDto: CreateTstDto): string{
        return `|>> name: ${createTstDto.name} |>> Description:  ${createTstDto.desc}`
    }


    // ^ but you can get all params in this way
    // @Get(':id')
    // getOne(@Param() params){
    //     return 'Params: ' + params.id;
    // }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
}
