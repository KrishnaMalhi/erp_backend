import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permission extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    type: string;

    @Column()
    parent_id: string;

    @Column()
    page_url: string;

    @Column()
    menu_label: string;

    @Column()
    label: string;

    @Column()
    create: boolean;

    @Column()
    read: boolean;

    @Column()
    write: boolean;

    @Column()
    update: boolean;

    @Column({ default: false })
    is_verified: boolean;

    @Column({ default: true })
    is_active: boolean;

    @Column()
    created_by: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column()
    last_modified_by: string;
}
