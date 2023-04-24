import { Body, Controller, Get, Post } from '@nestjs/common';
import { ErpSolutionService } from './erp_solution.service';
import { Request } from 'express';
import { HttpResponseCode, HttpResponseMessage, sendError, sendResponse } from '@app/common/utils/response.utils';

@Controller("/erp")
export class ErpSolutionController {
  constructor(private readonly erpSolutionService: ErpSolutionService) { }

  @Get()
  getHello() {
    return this.erpSolutionService.getHello();
  }

  @Post("login")
  loginUser(@Body() request: Request) {
    try {
      const response = this.erpSolutionService.loginUser(request)
      if (!response) {
        return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
      }
      return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
    } catch (error) {
      return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("createUser")
  createUser(@Body() request: Request) {
    try {
      const response = this.erpSolutionService.createUser(request)
      if (!response) {
        return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
      }
      return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
    } catch (error) {
      return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
    }
  }
}
