import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserInterface } from 'apps/user_management/src/interfaces/user.interface';
// import { User } from './users/schemas/user.schema';
// import { User } from 'apps/user_management/src/schemas/user.schema';

export const getCurrentUserByContext = (context: ExecutionContext): UserInterface => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
