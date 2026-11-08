import scenes from "@/assets/kids-scenes.jpg";
import logo from "@/assets/speak2kids.png.asset.json";

export function KidsLogo() {
  return <img src={logo.url} alt="Speak2Kids" width={260} height={140} className="h-24 w-52 object-contain" />;
}

export function KidsArtwork({ unit, theme }: { unit: number; theme: string }) {
  const column = (unit - 1) % 4;
  const row = Math.floor((unit - 1) / 4);
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg" role="img" aria-label={theme}>
      <img src={scenes} alt="" width={1920} height={1920} loading="lazy"
        className="absolute max-w-none" style={{ width: "400%", height: "500%", left: `${column * -100}%`, top: `${row * -100}%` }} />
    </div>
  );
}