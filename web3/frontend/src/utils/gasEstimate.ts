import { formT, EtherT } from "../types/common";
export const getGasEstimate = async (
  data: formT,
  context: EtherT
): Promise<number> => {
  const gasEstimate = await context.web3.eth.estimateGas({
    from: context.account,
    to: data.address,
    value: context.web3.utils.toWei(data.amount, "ether"),
  });

  console.log(gasEstimate);

  return gasEstimate;
};
