import localFont from "next/font/local";

export const ThunderFont = localFont({
  src: [
    { path: "./ThunderFont/Thunder-ThinLC.ttf", weight: "100" },
    { path: "./ThunderFont/Thunder-ExtraLightLC.ttf", weight: "200" },
    { path: "./ThunderFont/Thunder-LightLC.ttf", weight: "300" },
    { path: "./ThunderFont/Thunder-LC.ttf", weight: "400" },
    { path: "./ThunderFont/Thunder-MediumLC.ttf", weight: "500" },
    { path: "./ThunderFont/Thunder-SemiBoldLC.ttf", weight: "600" },
    { path: "./ThunderFont/Thunder-BoldLC.ttf", weight: "700" },
    { path: "./ThunderFont/Thunder-BlackLC.ttf", weight: "800" },
  ],
  variable: "--font-thunderFont",
});
