import { formT, EtherT } from "../types/common";
export const makeTransaction = async (
  data: formT,
  context: EtherT
): Promise<any> => {
  const gasEstimate = await context.web3.eth.estimateGas({
    from: context.account,
    to: data.address,
    value: context.web3.utils.toWei(data.amount, "ether"),
  });

  await context.web3.eth
    .sendTransaction({
      from: context.account,
      to: data.address,
      value: context.web3.utils.toWei(data.amount, "ether"),
      gas: gasEstimate,
    })
    .then((receipt: any) => {
      console.log(receipt);
    });

  // if (receipt.status === true) {
  //   return receipt;
  // } else {
  //   return null;
  // }
  return null;
};
