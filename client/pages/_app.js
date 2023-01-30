import "@/styles/globals.css";
import "antd/dist/reset.css";
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
