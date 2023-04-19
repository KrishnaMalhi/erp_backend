import { Body, Controller, Get, Post } from '@nestjs/common';
import { ErpSolutionService } from './erp_solution.service';
import { Request } from 'express';

@Controller()
export class ErpSolutionController {
  constructor(private readonly erpSolutionService: ErpSolutionService) { }

  @Get()
  getHello() {
    return this.erpSolutionService.getHello();
  }
  @Post("createUser")
  createUser(@Body() request: Request) {
    console.log("erp sol cont: ", request)
    return this.erpSolutionService.createUser(request)
  }
}
