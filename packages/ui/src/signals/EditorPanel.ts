export enum EditorPanel {
  Threads = 'threads-panel',
  Console = 'console-panel',
  Timeline = 'timeline-panel',
}

export function isEditorPanel(value: string): value is EditorPanel {
  return Object.values(EditorPanel).includes(value as EditorPanel);
}
