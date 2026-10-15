import Badge from "../atoms/Badge.jsx";
import StatTile from "../atoms/StatTile.jsx";

export default function ProfileSummary({ profile }) {
  return <section className="flex flex-col gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-md">
    <div className="flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="h-20 w-20 overflow-hidden rounded-full bg-primary-container p-1 shadow-sm">
          <img alt="Mascota perezoso" className="h-full w-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFYOFl3HIRMbYZSu7SGF4PRBTbzxnX9yI7JcfyBot7hqqkeA8YEaghRAV947L9illooar9ZeyrcoAvJl0AaDLibxSWUC2kpI6XFDIjoZLXuQ0uCY3VppRhDR4tas4jB6BHGqzKw5sKN_IosivdeAn2H8mrZJdq0r8UPs4WoBfw0Kt9pHxlwX6d7QJiSE-gmErn7kUkKVt_JLu-P57b-es6DFs8tHD0d0ME5mWN_FWxqfWrk727SS-xiQ" />
        </div>
        <span className="absolute -bottom-1 -right-1"><Badge variant="lime">LVL {profile.level}</Badge></span>
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="truncate font-headline text-lg font-bold">{profile.name}</h2>
        <p className="truncate text-xs text-on-surface-variant">Rango: {profile.rank}</p>
        <div className="mt-2"><Badge variant="softRed">☹ Medalla del Deshonor</Badge></div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 rounded-lg bg-surface-container-low p-2">
      <StatTile value={profile.streak} label="Días Racha" />
      <StatTile value={profile.jokers} label="Comodines" color="text-[#6b9f00]" />
      <StatTile value={profile.insults} label="Insultos / Sem" color="text-error" />
    </div>
  </section>;
}
