const AssetBase: {
  base: `${string}/`;
} = {
  base: '/',
};

export function setAssetBase(newBase: `${string}/`) {
  AssetBase.base = newBase;
}

/**
 * Get the base path for assets. This is used when the source of assets
 * is different from the url at which the player is accessed.
 *
 * `/test.png` would become `https://example.com/test.png` if the player is accessed at `https://example.com/`
 * We can set the base to `https://other.com/assets/` to explicitly make it `https://other.com/assets/test.png`
 *
 * @returns The base path for assets as a string with a trailing slash.
 */
export function useAssetBase(): `${string}/` {
  return AssetBase.base;
}
