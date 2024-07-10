// Wraps an MP4Box File as a WritableStream underlying sink.
export class MP4FileSink {
  private setStatus;
  private file;
  private offset;

  public constructor(file: any, setStatus: any, offset: number = 0) {
    this.file = file;
    this.setStatus = setStatus;
    this.offset = offset;
  }

  public write(chunk: any) {
    const buffer = new ArrayBuffer(chunk.byteLength);
    new Uint8Array(buffer).set(chunk);

    // Inform MP4Box where in the file this chunk is from.
    (buffer as any).fileStart = this.offset;
    this.offset += buffer.byteLength;

    this.setStatus('fetch', (this.offset / 1024 ** 2).toFixed(1) + ' MiB');
    this.file.appendBuffer(buffer);
  }

  public close() {
    this.setStatus('fetch', 'Done');
    this.file.flush();
  }
}
