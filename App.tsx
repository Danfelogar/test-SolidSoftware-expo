import { ConfigProvider } from "./src/context/config/ConfigProvider";
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <ConfigProvider>
      <HomeScreen />
    </ConfigProvider>
  );
}
