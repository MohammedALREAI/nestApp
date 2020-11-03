import { MinLength, MaxLength, IsString, } from 'class-validator'
export class AutCredentialsDto {

     @IsString()
     @MinLength(4)
     @MaxLength(20)
     username: string


     @IsString()
     @MinLength(8)
     @MaxLength(30)
     password: string

}
