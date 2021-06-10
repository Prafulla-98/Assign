import { MockUser } from "./mock-user";

export class MockRouter {
    answer = {
      extras: {
        state: {
          data: {
            title: 'test',
            body: 'test',
            id: 'test',
            userId: 'test',
          },
          user: {},
          addUser: {},
        }
      }
    };
  
    public getCurrentNavigation() {
        this.answer.extras.state.user = MockUser.user;
        this.answer.extras.state.addUser = MockUser.user;
        return this.answer;
    }
}