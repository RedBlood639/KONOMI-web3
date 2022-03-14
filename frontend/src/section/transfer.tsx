import React, { useState } from "react";
import {
  Text,
  Input,
  VStack,
  Button,
  Heading,
  FormControl,
  WarningOutlineIcon,
  PresenceTransition,
} from "native-base";
import CustomModal from "../components/Modal";
import { useEthContext } from "../context/EthereumContext";
// @redux
import { useDispatch } from "react-redux";
import { setTransfer } from "../store/trasfer/actions";
// @utils
import _ from "lodash";
import { Formik } from "formik";
import { validate } from "../utils/validate";
import { makeTransaction } from "../utils/transaction";
// @type
import { EtherT, formT } from "../types/common";
import { TranferMask } from "../types/common";

const Transfer: React.FC<TranferMask> = ({ isInstall }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [comment, setComment] = useState<boolean>(false);
  const context: EtherT = useEthContext();

  const onTransfer = async (data: formT) => {
    const pack = await makeTransaction(data, context);
    if (!_.isNull(pack)) {
      setComment(true);
    } else {
      setComment(false);
    }
    setShow(true);
    dispatch(setTransfer(pack));
  };

  return (
    <>
      <PresenceTransition
        visible={isInstall}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 250,
          },
        }}
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
      </PresenceTransition>
      <CustomModal show={show} setShow={setShow} comment={comment} />
    </>
  );
};

export default Transfer;
