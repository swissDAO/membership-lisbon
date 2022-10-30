import { Grid, Progress, Spacer, Text } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import { useContractReads } from "wagmi";
import { DISPATCHER } from "../../constants/constants";

export const Profile = () => {

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...DISPATCHER,
        functionName: 'owner',
        watch: true
      } as any,
    ],
  })

  console.log(data);
  console.log(isError);
  console.log(isLoading);


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
            Attended Events
          </Text>
          <Progress color="primary" value={55} />
        </Grid>
      </Grid.Container>

      <Spacer y={2} />

      <Grid.Container direction="row">
        <Grid>
          <Text
            h2
            css={{
              textGradient: "90deg, #E31D1C -20%, #FF0080",
            }}
            weight="bold"
          >
            Your Membercard
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container xs={12} sm={6} gap={2}>
        <Grid>
          <Text h4>
            Membercard Tier 🥉
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
