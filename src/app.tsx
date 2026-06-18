import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import Home from "./routes/index";

export default function App() {
  return (
    <MetaProvider>
      <Title>Web Template</Title>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </MetaProvider>
  );
}
