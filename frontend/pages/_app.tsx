import { createTheme, NextUIProvider } from '@nextui-org/react'
import { darkTheme, DisclaimerComponent, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import '../styles/globals.scss'

import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { Layout } from '../components/Layout'
import Image from 'next/image'

const { chains, provider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: process.env.INFURA_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'NextJS + Rainbowkit Template',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const darkThemeNextUi = createTheme({
  type: 'dark',
})

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);

const CustomAvatar = ({ size }: any) => {
  return (
    <Image
      alt=""
      src="/apple-touch-icon.png"
      height={size}
      width={size}
    />
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkThemeNextUi.className
      }}
    >
      <NextUIProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              ...darkTheme.accentColors.blue,
              borderRadius: 'large',
            })}
            appInfo={{
              disclaimer: Disclaimer,
            }}
            modalSize={'compact'}
            avatar={CustomAvatar}
            coolMode>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </WagmiConfig>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp