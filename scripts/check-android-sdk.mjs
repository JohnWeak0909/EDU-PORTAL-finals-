import { existsSync } from "node:fs";
import { join } from "node:path";

const defaultSdk = join(
  process.env.LOCALAPPDATA ?? "",
  "Android",
  "Sdk",
);

const sdkRoot =
  process.env.ANDROID_HOME ?? process.env.ANDROID_SDK_ROOT ?? defaultSdk;

const platformTools = join(sdkRoot, "platform-tools", "adb.exe");
const adbExists =
  existsSync(platformTools) ||
  existsSync(join(sdkRoot, "platform-tools", "adb"));

if (existsSync(sdkRoot) && adbExists) {
  console.log(`Android SDK: ${sdkRoot}`);
  process.exit(0);
}

console.error(`
Android SDK was not found.

Expected folder (default): ${defaultSdk}
Or set ANDROID_HOME / ANDROID_SDK_ROOT to your SDK path.

This project runs in the browser without Android tools. Use one of these instead:

  npm run web          Start Expo for web only (recommended on this PC)
  npx expo start       Then press  w  to open http://localhost:8081

Physical device (no local SDK required):
  npx expo start       Scan the QR code with Expo Go on your phone

Android emulator (requires Android Studio):
  1. Install Android Studio: https://developer.android.com/studio
  2. Open Android Studio → SDK Manager → install "Android SDK Platform-Tools"
  3. Set user environment variable ANDROID_HOME to:
     ${defaultSdk}
  4. Add to PATH: %ANDROID_HOME%\\platform-tools
  5. Restart the terminal, then run: npm run android
`);

process.exit(1);
