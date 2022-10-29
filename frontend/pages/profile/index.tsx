import { Grid, Button, Text } from "@nextui-org/react";
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
        </Grid>
      </Grid.Container>

      <div style={{ height: '750px' }}>
        <Spline scene="https://prod.spline.design/HU-SeJRjMO08kMhD/scene.splinecode" />
      </div>
    </>
  )
}

export default Profile;
