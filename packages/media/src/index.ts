export type ImageAsset = { src: string; alt: string };

export function assertImageAsset(asset: ImageAsset, label: string): void {
  if (!asset.alt.trim()) {
    throw new Error(`${label}: image alt text is required`);
  }
  if (!asset.src.trim()) {
    throw new Error(`${label}: image src is required`);
  }
}

export function validateImageCollection(assets: ImageAsset[], label: string): void {
  assets.forEach((asset, index) => assertImageAsset(asset, `${label}[${index}]`));
}
