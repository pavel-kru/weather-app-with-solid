import type { Component } from 'solid-js';
import { projectApi } from './api';

const App: Component = () => {
  console.log(projectApi.getLocations('Minsk'));

  return (
    <div class='container mx-auto p-4 min-h-screen bg-main-bg'>
      <header class='text-2xl font-semibold'>Gismeteo Clone</header>
      <main class='container mx-auto py-4'>Content</main>
    </div>
  );
};

export default App;
