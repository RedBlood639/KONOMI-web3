import { HStack, Spinner } from "native-base";

const LoadingSpineer = () => {
  return (
    <HStack alignItems="center" justifyContent="center">
      <Spinner size="lg" />
    </HStack>
  );
};

export default LoadingSpineer;
