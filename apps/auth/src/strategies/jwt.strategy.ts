import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret', // replace with your secret key
    });
  }

  async validate(payload: JwtPayload) {
    // You can add additional validation logic here
    return { userId: payload.sub, username: payload.username };
  }
}


// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Types } from 'mongoose';
// import { AuthService, TokenPayload } from '../auth.service';
// // import { UsersService } from '../users/users.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     configService: ConfigService,
//     private readonly authService: AuthService,
//     // private readonly usersService: UsersService,
//   ) {
//     super({
//       jwtFromRequest: ExtractJwt.fromExtractors([
//         (request: any) => {
//           return request?.Authentication;
//         },
//       ]),
//       secretOrKey: configService.get('JWT_SECRET'),
//     });
//   }

//   async validate(payload: any) {
//     // Call authentication service to get user data
//     const { user } = await this.authService.validateToken(payload.sub);

//     return user;
//   }

//   // async validate({ userId }: TokenPayload) {
//   //   try {
//   //     return await this.usersService.getUser({
//   //       _id: new Types.ObjectId(userId),
//   //     });
//   //   } catch (err) {
//   //     throw new UnauthorizedException();
//   //   }
//   // }
// }
