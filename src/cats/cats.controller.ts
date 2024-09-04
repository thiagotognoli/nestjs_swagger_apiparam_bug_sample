import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatDto } from './dto/cat.dto';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor() {}

  @Get(':id')
  @ApiParam(
    {
      name: null,
      type: CatDto
    }
  )
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  findOne() {
    return 'oi';
  }
}
