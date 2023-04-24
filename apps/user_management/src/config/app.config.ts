import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common"

export const AppCongiguration = (app) => {

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('User Management API')
        .setDescription('The User Management API documentation')
        .setVersion('1.0')
        .addTag('permissions')
        .addTag('roles')
        .addTag('users')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('user_management_api_doc', app, document);
}