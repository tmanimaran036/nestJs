import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  orders: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  Order_at: Date;
}
