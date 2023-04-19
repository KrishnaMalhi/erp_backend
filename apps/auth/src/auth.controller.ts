import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import JwtAuthGuard from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
// import { User } from './users/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @EventPattern('auth.login')
  async handleLogin(data: any) {
    // Handle user login request
    const result = await this.authService.login(data.username, data.password);
    if (!result) {
      throw new Error('Unauthorized');
    }
    // Send JWT to microservice via RabbitMQ queue
    await this.authService.sendToken(result.token);
  }

  @MessagePattern('auth.validateToken')
  async handleValidateToken(token: string) {
    // Validate JWT token
    const decoded = await this.authService.validateToken(token);

    // Return user data if token is valid
    if (decoded) {
      return decoded.user;
    } else {
      throw new Error('Invalid token');
    }
  }
}