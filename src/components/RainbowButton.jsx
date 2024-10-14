import { SignInButton, SignedOut, useAuth } from "@clerk/clerk-react";
import { RainbowButton } from "./ui/rainbow-button";


export function RainbowButtonDemo({ text }) {
    return (
        <RainbowButton>
            <SignedOut>
                <SignInButton>{text}</SignInButton>
            </SignedOut>
        </RainbowButton>
    )
}
