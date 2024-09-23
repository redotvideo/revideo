export async function verifyFetchResponse(response: Response, remarks: string) {
  if (response.ok) {
    return;
  }

  throw new Error(
    `ERROR: ${remarks}. response returned status code ${response.status}.`,
  );
}
