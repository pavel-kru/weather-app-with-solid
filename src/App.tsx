import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Routes, Route, A } from "@solidjs/router";

// Components
const Now = lazy(() => import("./views/Now"));
const Today = lazy(() => import("./views/Today"));
const Tomorrow = lazy(() => import("./views/Tomorrow"));

const App: Component = () => {
  return (
    <Router>
      <div class="container mx-auto p-4 min-h-screen bg-main-bg">
        <header class="text-2xl font-semibold">Gismeteo Clone</header>
        <main class="container mx-auto py-4">
          <nav>
            <A href="/now">Now</A>
            <A href="/tomorrow">Tomorrow</A>
            <A href="/">Today</A>
          </nav>
          <Routes>
            <Route path="/now" component={Now} />
            <Route path="/tomorrow" component={Tomorrow} />
            <Route path="/" component={Today} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
