import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  password: string;
  role:string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'john', password: '123', role: 'user' },
    { id: 2, username: 'maria', password: '123', role: 'user' },
    { id: 3, username: 'Capn_maru', password: '123', role: 'admin' },
    { id: 4, username: 'Capn_siva', password: '123', role: 'user' },
    { id: 5, username: 'capn_parveen', password: '123', role: 'user' },
  ]; // in-memory array

  private idCounter = 6; // next ID after last user

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  findWithName(username: string): User | undefined {
    return this.users.find((n) => n.username === username);
  }

  create(nUser: Omit<User, 'id'>): User {
    const newUser: User = { id: this.idCounter++, ...nUser };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: Partial<Omit<User, 'id'>>): User | undefined {
    const existing = this.findOne(id);
    if (existing) {
      Object.assign(existing, user);
      return existing;
    }
    return undefined;
  }

  remove(id: number): boolean {
    const index = this.users.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
