import * as Yup from "yup";
// @validate
export const validate = Yup.object().shape({
  address: Yup.string().required("Address is requried"),
  amount: Yup.string().required("Amount is requried"),
});
