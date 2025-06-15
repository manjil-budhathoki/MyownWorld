import { useEffect, useState } from "react";

export default function ConnectSection() {
  const [localTime, setLocalTime] = useState("");
  const [visitorLocation, setVisitorLocation] = useState("Nepal");

  useEffect(() => {
    // Nepal time
    const nepalTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kathmandu",
    });
    setLocalTime(nepalTime);

    // Location detection (optional)
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        setVisitorLocation(`${data.city}, ${data.country_name}`);
      })
      .catch(() => {
        setVisitorLocation("Kathmandu, Nepal");
      });
  }, []);

  return (
    <div className="w-full flex justify-start">
        <div className="max-w-[680px] w-full px-4 sm:px-6 lg:px-0 text-left text-[15px] text-zinc-300 mb-1">
            <h2 className="text-white text-sm mb-4 font-medium tracking-wide">Connect</h2>

            <p className="mb-3 leading-[1.8]">
            Find me on these sites:{" "}
            <a href="https://github.com/manjil-budhathoki" className="underline hover:text-white transition" target="_blank" rel="noreferrer">GitHub</a>,{" "}
            <a href="https://x.com/Manjil697127" className="underline hover:text-white transition" target="_blank" rel="noreferrer">Twitter</a>,{" "}
            <a href="https://www.linkedin.com/in/manjil-budhathoki/" className="underline hover:text-white transition" target="_blank" rel="noreferrer">LinkedIn</a>,{" "}
            <a href="https://peerlist.io/manjil" className="underline hover:text-white transition" target="_blank" rel="noreferrer">Peerlist</a>,{" "}
            <a href="https://bsky.app/profile/manjil.bsky.social" className="underline hover:text-white transition" target="_blank" rel="noreferrer">Bluesky</a>
            </p>

            <p className="mb-1">
            Reach out at <a href="mailto:buildwithmanjil@gmail.com" className="underline hover:text-white">buildwithmanjil@gmail.com</a>
            </p>

            <p className="text-zinc-500 text-sm mt-1 flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-500 rounded-full" />
            {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Kathmandu",
            })}{" "}
            Nepal time
            </p>

            <p className="text-zinc-600 text-xs mt-2">Last visit from Kathmandu, Nepal</p>
        </div>
    </div>
  );
}
