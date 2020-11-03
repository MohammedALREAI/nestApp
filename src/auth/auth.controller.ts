import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AutCredentialsDto } from './dto/auth.credentials.dto';

@Controller('auth')
export class AuthController {

     constructor(private userAuth: AuthService) { }

     @Post('/signup')
     signUp(@Body() args: AutCredentialsDto) {
          const { username, password } = args;
          return this.userAuth.signUp({ username, password })

     }

}
