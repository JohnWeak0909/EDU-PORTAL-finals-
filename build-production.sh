#!/bin/bash
# EduPortal - Production Build & Deploy Script
# This script automates the build process for production deployment

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE}EduPortal - Production Build${NC}"
echo -e "${BLUE}=================================${NC}"

# Step 1: Check prerequisites
echo -e "\n${YELLOW}Step 1: Checking prerequisites...${NC}"

if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed${NC}"
    exit 1
fi

if ! command -v npx &> /dev/null; then
    echo -e "${RED}Error: npx is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm and npx found${NC}"

# Step 2: TypeScript check
echo -e "\n${YELLOW}Step 2: TypeScript compilation check...${NC}"
npm run check
if [ $? -ne 0 ]; then
    echo -e "${RED}TypeScript errors found. Fix them before building.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ TypeScript check passed${NC}"

# Step 3: Environment setup
echo -e "\n${YELLOW}Step 3: Setting up environment...${NC}"
export NODE_ENV=production
export EAS_NO_VCS=1
export EAS_SKIP_AUTO_FINGERPRINT=1
export EAS_BUILD_NO_EXPO_GO_WARNING=1

echo -e "${GREEN}✓ Environment variables set${NC}"

# Step 4: Build selection
echo -e "\n${YELLOW}Step 4: Select build type:${NC}"
echo "  1) APK (Testing/Direct Distribution)"
echo "  2) AAB (Google Play Store)"
echo -e "  ${YELLOW}Enter choice (1 or 2):${NC}"
read -r BUILD_TYPE

if [ "$BUILD_TYPE" = "1" ]; then
    PROFILE="preview"
    echo -e "${GREEN}Building APK for testing...${NC}"
elif [ "$BUILD_TYPE" = "2" ]; then
    PROFILE="production"
    echo -e "${GREEN}Building AAB for Play Store...${NC}"
else
    echo -e "${RED}Invalid choice. Exiting.${NC}"
    exit 1
fi

# Step 5: Start build
echo -e "\n${YELLOW}Step 5: Starting EAS build...${NC}"
echo -e "${BLUE}Profile: $PROFILE${NC}"
echo -e "${BLUE}Platform: Android${NC}"

npx eas build --platform android --profile $PROFILE

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}=================================${NC}"
    echo -e "${GREEN}✓ Build completed successfully!${NC}"
    echo -e "${GREEN}=================================${NC}"
    echo -e "${GREEN}Download your app at:${NC}"
    echo -e "${BLUE}https://expo.dev/accounts/kroj981/projects/edu-portal${NC}"
else
    echo -e "\n${RED}=================================${NC}"
    echo -e "${RED}✗ Build failed${NC}"
    echo -e "${RED}=================================${NC}"
    exit 1
fi
