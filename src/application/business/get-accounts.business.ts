import { Account } from '../entities/data/account';
import { User } from '../entities/data/user';
import { AccountContract } from '../entities/contracts/account.contract';

export default class GetAccountsBusiness {
  constructor(
    private accountContract: AccountContract
  ) { }

  getByUserId(userId: number): Promise<Account[]> {
    return this.accountContract.findByUserId(userId);
  }

}
