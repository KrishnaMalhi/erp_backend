import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { Role } from "./role.entity";

@Entity()
@Unique(['email', 'mobile_number'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    mobile_number: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    is_verified: boolean;

    @Column()
    remember_token: string;

    @Column({ default: true })
    is_active: boolean;

    @Column()
    institute_id: string;

    @Column({ default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;

    @Column({ default: () => "CURRENT_TIMESTAMP" })
    deleted_at: Date;

    @ManyToOne(type => Role, role => role.users)
    @JoinColumn({ name: "role_id" })
    role: Role;
}
