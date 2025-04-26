export interface FirebaseUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    providerData: Array<{
        providerId: string;
        uid: string;
        displayName: string | null;
        email: string | null;
        photoURL: string | null;
        phoneNumber: string | null;
    }>;
    metadata: {
        creationTime?: string;
        lastSignInTime?: string;
    };
}

