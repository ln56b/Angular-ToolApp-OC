import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
  private users: User[] = [
    {
      firstName: "James",
      lastName: "Smith",
      email: "john@smith.com",
      drinkPreference: "Coke",
      hobbies: ["Cycling", "Skiing"],
    },
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user) {
    this.users.push(user);
    this.emitUsers();
  }
}
