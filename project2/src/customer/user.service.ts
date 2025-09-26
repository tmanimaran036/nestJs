import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerCreateDTO } from 'src/dtos/customer/customerC';
import { Customer } from 'src/typeORM/customer/customerORM';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async findOne(id: number) {
    return await this.customerRepository.findOneBy({ id });
  }

  async create(customerData: CustomerCreateDTO): Promise<CustomerCreateDTO> {
    const customers = this.customerRepository.create(customerData);
    console.log(customers);
    console.log(this.customerRepository);
    return this.customerRepository.save(customers);
  }

  async update(id: number, customerData: Partial<Customer>): Promise<Customer> {
    await this.customerRepository.update(id, customerData);

    const customerById = await this.customerRepository.findOneBy({ id });

    if (!customerById) {
     throw new NotFoundException('customer updates failed');
    }

    return customerById;
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.customerRepository.delete(id);
  }
}
