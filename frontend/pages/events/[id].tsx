import { Button, Grid, Text } from "@nextui-org/react";
import { ethers } from "ethers";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { DISPATCHER, MEMBERCARD, SECRETS } from "../../constants/constants";

export default function Approve() {
  const { address } = useAccount()


  console.log([0, address, SECRETS[0][0]]);


  const { config } = usePrepareContractWrite({
    address: MEMBERCARD.address,
    abi: MEMBERCARD.abi,
    functionName: 'mintMemberCard',
    //overrides: { gasLimit: 1000000000000 },
    //args: [0, address, "0x22686836776363656964776f6e70386f367935317833746a3936656a6472706d"]
  })

  const {
    data: mintData,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    write: mint
  } = useContractWrite(config as any);

  // const _mint = async () => {
  //   try {
  //     mint();
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <Grid.Container direction="row">
        <Grid>
          <Text
            h2
            css={{
              textGradient: "90deg, #E31D1C -20%, #FF0080",
            }}
            weight="bold"
          >
            Claim your Proof of Attendance of the Event!
          </Text>

          <Button onClick={() => mint?.()} color="gradient">
            {isMintLoading && 'Waiting for approval'}
            {isMintStarted && 'Minting...'}
            {!isMintLoading && !isMintStarted && 'Approve'}
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}