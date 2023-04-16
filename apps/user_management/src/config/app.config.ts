// import { HttpAdapterHost } from '@nestjs/core';
// import { AllExceptionsFilter } from 'src/utils/exceptionFilter.utils';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common"


export const AppCongiguration = (app) => {

    // const httpAdapter = app.get(HttpAdapterHost);
    // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('User Management API')
        .setDescription('The User Management API documentation')
        .setVersion('1.0')
        // .addTag('auth')
        .addTag('users')
        .addTag('roles')
        .addTag('permissions')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('user_management_api_doc', app, document);
}