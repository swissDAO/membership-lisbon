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
        </Grid>
      </Grid.Container>

      <Grid.Container xs={12} sm={6} gap={2}>
        <Grid>
          <Text h4>
            Experience Points (75 / 100)
          </Text>
          <Progress color="primary" value={75} />
        </Grid>
        <Grid>
          <Text h4>
            Skills Points (55 / 100)
          </Text>
          <Progress color="primary" value={55} />
        </Grid>
        <Grid>
          <Text h4>
            Membership Progress (35 / 100)
          </Text>
          <Progress color="primary" value={35} />
        </Grid>
      </Grid.Container>

      <div style={{ height: '750px' }}>
        <Spline scene="https://prod.spline.design/HU-SeJRjMO08kMhD/scene.splinecode" />
      </div>
    </>
  )
}

export default Profile;
