import colors from 'tailwindcss/colors';

export function getHeroBackgroundTiles() {
  const workspacesPerRow = 4;
  const workspaceHeight = 240;
  const gapLength = 32;
  const tileColors = [colors.blue[500], colors.cyan[400], colors.sky[500]];
  const images = ['/imgs/chan/joy.svg', '/imgs/chan/surprise.svg', '/imgs/chan/tongueout.svg', '/imgs/waylnad.webp'];

  const leftColumns = Array.from({ length: 3 }, () => generateRow(workspacesPerRow));
  const rightColumns = Array.from({ length: 3 }, () => generateRow(workspacesPerRow));
  const height = workspacesPerRow * (workspaceHeight + gapLength);

  return {
    leftColumns,
    rightColumns,
    height,
    workspacesPerRow,
    workspaceHeight,
    gapLength,
  };

  function generateRow(amount) {
    return Array.from({ length: amount }).map(generateWorkspace);
  }

  function generateWorkspace() {
    return [
      generateTiles(),
      Math.random() > 0.4 ? generateTiles() : undefined,
      Math.random() > 0.7 ? generateTiles() : undefined,
    ].filter(Boolean);
  }

  function generateTiles() {
    return Math.random() > 0.2 ? [generateTile()] : [generateTile(), generateTile()]; // 80% chance of one tile (wider), 20% chance of two tiles (narrower)
  }

  function generateTile() {
    return { color: getRandomColor(), image: Math.random() > 0.7 ? getRandomImage() : undefined };
  }

  function getRandomColor() {
    return tileColors[Math.floor(Math.random() * tileColors.length)];
  }

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }
}