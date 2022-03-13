import React from "react";
import {
  Box,
  Text,
  Input,
  VStack,
  Button,
  Heading,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import { Formik } from "formik";
import { toast } from "react-toastify";
// @utils
import { validate } from "../utils/validate";
// @type
import { formT } from "../types/form";

const TransferPage: React.FC = () => {
  const onTransfer = (data: formT) => {
    console.log(data);
    toast.success("Transaction successful", {
      theme: "dark",
    });
  };
  return (
    <Box
      safeArea
      w="90%"
      p={"10"}
      maxWidth="290"
      borderRadius={8}
      background="white"
      shadow={"9"}
    >
      <Heading color="black">{"Tranfer"}</Heading>
      <Formik
        initialValues={{ address: "", amount: "0" }}
        onSubmit={onTransfer}
        validationSchema={validate}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <VStack space={3}>
            <Text color={"amber.900"}>{"Transfer your Token here."}</Text>
            {/* @address for form */}
            <FormControl isRequired isInvalid={"address" in errors}>
              <FormControl.Label _text={{ color: "black" }}>
                {"Address"}
              </FormControl.Label>
              <Input
                onBlur={handleBlur("address")}
                placeholder="Recipient Address"
                onChangeText={handleChange("address")}
                value={values.address}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.address}
              </FormControl.ErrorMessage>
            </FormControl>
            {/* @amount for form */}
            <FormControl isRequired isInvalid={"amount" in errors}>
              <FormControl.Label _text={{ color: "black" }}>
                {"Token Amount"}
              </FormControl.Label>
              <Input
                onBlur={handleBlur("amount")}
                onChangeText={handleChange("amount")}
                value={values.amount}
                placeholder="Amount"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.amount}
              </FormControl.ErrorMessage>
            </FormControl>
            <Text color={"gray.500"}>{"Make sure you have IYO Token"}</Text>
            <Button
              variant="solid"
              background="black"
              onPress={() => handleSubmit()}
            >
              {"Transfer"}
            </Button>
          </VStack>
        )}
      </Formik>
    </Box>
  );
};

export default TransferPage;
