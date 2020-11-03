import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { AutCredentialsDto } from './dto/auth.credentials.dto';

@Injectable()
export class AuthService {



     constructor(
          @InjectRepository(User)
          private userRepository: UserRepository) { }




     //  sign up ansync funcation will return token and user id
     async signUp({ username, password }: AutCredentialsDto): Promise<any> {
          return this.userRepository.signUp({ username, password });

     }














     // we need to make the function will be create




}
