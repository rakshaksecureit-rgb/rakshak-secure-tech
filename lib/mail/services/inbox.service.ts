import { inboxMock } from "../mock/inbox";

export class InboxService {
  async getInbox() {
    return inboxMock;
  }
}

export const inboxService = new InboxService();