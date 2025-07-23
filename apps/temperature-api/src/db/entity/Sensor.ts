import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: 'sensors' })
export class Sensor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, length: 100 })
    name: string

    @Column({ nullable: false, length: 50 })
    type: string

    @Column({ nullable: false, length: 100 })
    location: string

    @Column({ type: 'float', default: 0, precision: 2 })
    value: number

    @Column({ length: 20 })
    unit: string

    @Column({ nullable: false, length: 20, default: 'inactive' })
    status: string

    @Column({ nullable: false, type: 'timestamp with time zone', default: Date.now() })
    last_updated: string

    @Column({ nullable: false, type: 'timestamp with time zone', default: Date.now() })
    created_at: string
}