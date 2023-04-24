

// import { EntityRepository, Repository, FindOneOptions } from 'typeorm';
// import { Permission } from '../entities/permission.entity';
// import { CreatePermissionDto } from '../dto/permissions.dto';


// @EntityRepository(Permission)
// export class PermissionRepository extends Repository<Permission> {
//     async createPermission(createPermissionDto: CreatePermissionDto): Promise<Permission> {
//         const options: FindOneOptions<Permission> = createPermissionDto;
//         console.log(options)
//         const permission = new Permission();
//         return await permission.save(options);
//     }
// }
