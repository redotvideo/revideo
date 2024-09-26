export enum EditorPanel {
  // TODO: technically, this is a plugin so it's not entirely safe to assume it's always available
  SceneGraph = '@revideo/2d-scene-graph',
  Threads = 'threads-panel',
  Console = 'console-panel',
  Timeline = 'timeline-panel',
}

export function isEditorPanel(value: string): value is EditorPanel {
  return Object.values(EditorPanel).includes(value as EditorPanel);
}
