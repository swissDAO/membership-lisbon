import { Grid, Button, Text, Progress } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import { useAccount } from "wagmi";

export const Profile = () => {
  const { address } = useAccount()

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
            Your Profile
          </Text>

          <Progress value={50} shadow color="primary" status="primary" />
          <Progress value={30} shadow color="secondary" status="secondary" />
          <Progress value={70} shadow color="success" status="success" />
          <Progress value={90} shadow color="warning" status="warning" />
          <Progress value={10} shadow color="error" status="error" />
        </Grid>
      </Grid.Container>

      <div style={{ height: '750px' }}>
        <Spline scene="https://prod.spline.design/HU-SeJRjMO08kMhD/scene.splinecode" />
      </div>
    </>
  )
}

export default Profile;
