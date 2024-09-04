import { IsInt, IsString } from 'class-validator';

export class CatDto {
  @IsString()
  readonly id: string;
}
