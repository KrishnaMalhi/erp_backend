import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common"


export const AppCongiguration = (app) => {

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('Authentication API')
        .setDescription('The Authentication API documentation')
        .setVersion('1.0')
        .addTag('users')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('auth_doc', app, document);
}