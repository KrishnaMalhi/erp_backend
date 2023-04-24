import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { HttpResponseCode, HttpResponseMessage, sendError, sendResponse } from '@app/common/utils/response.utils';


@ApiTags("auth")
@Controller("/auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @EventPattern('login')
  @Post("/login")
  async login(@Body() payload: any) {
    try {
      const token = await this.authService.login(payload);
      console.log("token: ", token)
      // return { token };
      if (!token) {
        return sendResponse(token, HttpResponseMessage.UNAUTHORIZED, false, HttpResponseCode.UNAUTHORIZED)
      }
      return sendResponse(token, HttpResponseMessage.OK, true, HttpResponseCode.OK)
    } catch (error) {
      console.log(error)
      return sendError({}, error.message, error.code);
    }
  }

  @EventPattern('singUp')
  @Post("/signUp")
  async signUp(@Body() payload: any) {
    // try {
    return await this.authService.signUp(payload);
    //   console.log("token: ", token)
    //   // return { token };
    //   if (!token) {
    //     return sendResponse(token, HttpResponseMessage.UNAUTHORIZED, false, HttpResponseCode.UNAUTHORIZED)
    //   }
    //   return sendResponse(token, HttpResponseMessage.OK, true, HttpResponseCode.OK)
    // } catch (error) {
    //   console.log(error)
    //   return sendError({}, error.message, error.code);
    // }
  }

}