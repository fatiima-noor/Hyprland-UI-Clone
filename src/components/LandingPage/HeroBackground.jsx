import joy from '../../assets/joy.svg';
import surprise from '../../assets/surprise.svg';
import tongueout from '../../assets/tongueout.svg';
import waylnad from '../../assets/waylnad.webp';

function HeroBackground({ backgroundData, isVisible }) {
  const { workspacesPerRow, gapLength, workspaceHeight, height, leftColumns, rightColumns } = backgroundData;
  const REVEAL_DURATION = 800;

  const images = { joy, surprise, tongueout, waylnad };

  return (
    <div
      className="wrapper max-sm:hidden"
      style={{ '--reveal-duration': `${REVEAL_DURATION}ms` }}
      aria-hidden="true"
    >
      <div
        className="inner-wrapper"
        style={{
          '--amount': workspacesPerRow,
          '--workspace-gap': `${gapLength}px`,
          '--workspace-height': `${workspaceHeight}px`,
          '--length': `${height}px`,
        }}
      >
        <div className="top-light" />
        <div className="columns left">
          {leftColumns.map((column, colIdx) => (
            <div className="column" key={`left-${colIdx}`}>
              {column.map((workspace, wsIdx) => (
                <div className="workspace" key={`left-${colIdx}-${wsIdx}`}>
                  {workspace.map((tiles, tIdx) => (
                    <div className="tiles" key={`left-${colIdx}-${wsIdx}-${tIdx}`}>
                      {tiles.map(({ color, image }, tileIdx) => (
                        <div
                          className={`tile ${image ? 'hasImage' : ''}`}
                          style={{ '--color': color }}
                          key={`left-${colIdx}-${wsIdx}-${tIdx}-${tileIdx}`}
                        >
                          {image && (
                            <img
                              src={images[image.split('/').pop().split('.')[0]]}
                              className="h-full w-full object-contain"
                              alt=""
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="columns right">
          {rightColumns.map((column, colIdx) => (
            <div className="column" key={`right-${colIdx}`}>
              {column.map((workspace, wsIdx) => (
                <div className="workspace" key={`right-${colIdx}-${wsIdx}`}>
                  {workspace.map((tiles, tIdx) => (
                    <div className="tiles" key={`right-${colIdx}-${wsIdx}-${tIdx}`}>
                      {tiles.map(({ color, image }, tileIdx) => (
                        <div
                          className={`tile ${image ? 'hasImage' : ''}`}
                          style={{ '--color': color }}
                          key={`right-${colIdx}-${wsIdx}-${tIdx}-${tileIdx}`}
                        >
                          {image && (
                            <img
                              src={images[image.split('/').pop().split('.')[0]]}
                              className="h-full w-full object-contain"
                              alt=""
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroBackground;