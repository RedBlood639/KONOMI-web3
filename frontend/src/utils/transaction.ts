import { formT, EtherT } from "../types/common";
export const makeTransaction = async (
  data: formT,
  context: EtherT
): Promise<any> => {
  const receipt = await context.web3.eth.sendTransaction({
    from: context.account,
    to: data.address,
    value: context.web3.utils.toWei(data.amount, "ether"),
    gas: 21000,
  });

  console.log(receipt, "receipt");
  if (receipt.status == true) {
    return receipt;
  } else {
    return null;
  }
};
