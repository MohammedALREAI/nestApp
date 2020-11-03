import { EntityRepository, Repository } from 'typeorm';

import { User } from './user.entity';
import { AutCredentialsDto } from './dto/auth.credentials.dto';
import { NotFoundException } from '@nestjs/common';
@EntityRepository(User)

export class UserRepository extends Repository<User>{


     async signUp(autCredentialsDto: AutCredentialsDto): Promise<any> {
          const { username, password } = autCredentialsDto;

          try {

               const user = await User.create({ username, password }).save()
               if (!user) {
                    throw new NotFoundException(" THER USER CONT CREATE IT ");


               }


          } catch (e) {

               throw new NotFoundException(`THE USER END USER ${e.message} `);

          }



     }

}


// we will be add the some featcher  aftet 2 minter
// add the  the module Repository in the module
