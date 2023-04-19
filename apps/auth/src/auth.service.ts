import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from './users/schemas/user.schema';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export interface TokenPayload {
  userId: string;
}

@Injectable()
export class AuthService {

  private readonly authClient = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'auth',
    },
  });

  constructor(private readonly jwtService: JwtService) { }

  async login(username: string, password: string): Promise<{ token: string }> {
    // Call authentication service to verify credentials
    const user = await this.authClient.send('auth.verifyCredentials', { username, password }).toPromise();

    // Generate JWT token
    const token = this.jwtService.sign({ sub: user.id });

    return { token };
  }

  async sendToken(token: string): Promise<void> {
    // Send JWT token to microservice via RabbitMQ queue
    await this.authClient.emit('auth.token', token).toPromise();
  }

  async validateToken(token: string): Promise<{ user: any }> {
    try {
      // Verify JWT token
      const payload = this.jwtService.verify(token);

      // Call authentication service to get user data
      const user = await this.authClient.send('auth.getUserById', payload.sub).toPromise();

      return { user };
    } catch (error) {
      return null;
    }
  }
}
  // constructor(
  //   private readonly configService: ConfigService,
  //   private readonly jwtService: JwtService,
  // ) { }

  // async login(user: User, response: Response) {
  //   const tokenPayload: TokenPayload = {
  //     userId: user._id.toHexString(),
  //   };

  //   const expires = new Date();
  //   expires.setSeconds(
  //     expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
  //   );

  //   const token = this.jwtService.sign(tokenPayload);

  //   response.cookie('Authentication', token, {
  //     httpOnly: true,
  //     expires,
  //   });
  // }

//   logout(response: Response) {
//     response.cookie('Authentication', '', {
//       httpOnly: true,
//       expires: new Date(),
//     });
//   }
// }


// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
