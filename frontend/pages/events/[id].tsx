import { Button, Grid, Text } from "@nextui-org/react";

export default function Approve() {
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

          <Button color="gradient" auto onClick={() => { }}>
            Approve!
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}